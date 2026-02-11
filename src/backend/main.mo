import Array "mo:core/Array";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";
import Principal "mo:core/Principal";
import AccessControl "authorization/access-control";
import MixinAuthorization "authorization/MixinAuthorization";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type UserProfile = {
    name : Text;
  };

  type Inquiry = {
    id : Nat;
    timestamp : Time.Time;
    submittedBy : Principal;
    name : Text;
    email : Text;
    message : Text;
    company : ?Text;
    phone : ?Text;
    topic : ?Text;
    preferredContactTime : ?Text;
  };

  var inquiries = Array.empty<Inquiry>();
  var inquiryCounter : Nat = 0;

  // Public inquiry submission - no authentication required (guests can submit)
  public shared ({ caller }) func submitInquiry(
    name : Text,
    email : Text,
    message : Text,
    company : ?Text,
    phone : ?Text,
    topic : ?Text,
    preferredContactTime : ?Text,
  ) : async () {
    // No authorization check - anyone including guests can submit inquiries
    let inquiry : Inquiry = {
      id = inquiryCounter;
      timestamp = Time.now();
      submittedBy = caller;
      name;
      email;
      message;
      company;
      phone;
      topic;
      preferredContactTime;
    };

    let newInquiry = Array.singleton(inquiry);
    inquiries := inquiries.concat(newInquiry);
    inquiryCounter += 1;
  };

  // Admin-only: View all inquiries
  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view all inquiries");
    };
    inquiries;
  };

  // Admin-only: View specific inquiry by ID
  public query ({ caller }) func getInquiryById(id : Nat) : async ?Inquiry {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view inquiries");
    };
    inquiries.find(
      func(inq) {
        inq.id == id;
      }
    );
  };

  // Admin-only: View inquiries by specific user
  public query ({ caller }) func getInquiriesByUser(user : Principal) : async [Inquiry] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view inquiries by user");
    };
    inquiries.filter(
      func(inquiry) {
        inquiry.submittedBy == user;
      }
    );
  };

  // Required user profile functions
  var userProfiles = Array.empty<(Principal, UserProfile)>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    let found = userProfiles.find(
      func(entry) {
        entry.0 == caller;
      }
    );
    switch (found) {
      case (null) { null };
      case (?(_, profile)) { ?profile };
    };
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    let found = userProfiles.find(
      func(entry) {
        entry.0 == user;
      }
    );
    switch (found) {
      case (null) { null };
      case (?(_, profile)) { ?profile };
    };
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };

    // Remove existing profile if any
    let filtered = userProfiles.filter(
      func(entry) {
        entry.0 != caller;
      }
    );
    userProfiles := filtered;

    // Add new profile
    let newProfile = Array.singleton((caller, profile));
    userProfiles := userProfiles.concat(newProfile);
  };
};
