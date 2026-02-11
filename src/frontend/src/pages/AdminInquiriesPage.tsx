import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Loader2, AlertCircle, ShieldAlert, Inbox } from 'lucide-react';
import { useGetAllInquiries } from '@/hooks/useAdminInquiries';
import AdminGate from '@/components/auth/AdminGate';

function AdminInquiriesContent() {
  const { data: inquiries, isLoading, isError, error } = useGetAllInquiries();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (isError) {
    const errorMessage = error?.message || 'Failed to load inquiries';
    const isUnauthorized = errorMessage.includes('Unauthorized') || errorMessage.includes('Only admins');

    if (isUnauthorized) {
      return (
        <Alert variant="destructive">
          <ShieldAlert className="h-4 w-4" />
          <AlertTitle>Access Denied</AlertTitle>
          <AlertDescription>
            You do not have permission to view inquiries. Only administrators can access this page.
          </AlertDescription>
        </Alert>
      );
    }

    return (
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{errorMessage}</AlertDescription>
      </Alert>
    );
  }

  if (!inquiries || inquiries.length === 0) {
    return (
      <Alert>
        <Inbox className="h-4 w-4" />
        <AlertTitle>No Inquiries Yet</AlertTitle>
        <AlertDescription>
          There are no inquiries to display. New inquiries will appear here once customers submit them.
        </AlertDescription>
      </Alert>
    );
  }

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">All Inquiries</h2>
          <p className="text-muted-foreground">Total: {inquiries.length}</p>
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Contact</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Message</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inquiries.map((inquiry) => (
              <TableRow key={inquiry.id.toString()}>
                <TableCell className="whitespace-nowrap text-sm">
                  {formatDate(inquiry.timestamp)}
                </TableCell>
                <TableCell className="font-medium">{inquiry.name}</TableCell>
                <TableCell>{inquiry.company || '-'}</TableCell>
                <TableCell>
                  <div className="space-y-1 text-sm">
                    {inquiry.phone && <div>📞 {inquiry.phone}</div>}
                    {inquiry.email && <div className="text-muted-foreground break-all">✉️ {inquiry.email}</div>}
                  </div>
                </TableCell>
                <TableCell>
                  {inquiry.topic ? (
                    <Badge variant="secondary">{inquiry.topic}</Badge>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell className="max-w-md">
                  <div className="text-sm line-clamp-3">{inquiry.message}</div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default function AdminInquiriesPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <section className="bg-gradient-to-br from-background via-muted/30 to-background py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage and review customer inquiries</p>
          </div>
        </div>
      </section>

      <section className="py-8 flex-1">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AdminGate>
              <Card>
                <CardHeader>
                  <CardTitle>Customer Inquiries</CardTitle>
                  <CardDescription>
                    View all inquiries submitted through the contact form
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AdminInquiriesContent />
                </CardContent>
              </Card>
            </AdminGate>
          </div>
        </div>
      </section>
    </div>
  );
}
