import { beds } from '../../data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const type   = searchParams.get('type');   // ICU, General, Cardiac
  const status = searchParams.get('status'); // available, occupied, maintenance

  let result = [...beds];
  if (type)   result = result.filter(b => b.type.toLowerCase() === type.toLowerCase());
  if (status) result = result.filter(b => b.status.toLowerCase() === status.toLowerCase());

  const summary = {
    total: result.length,
    available: result.filter(b => b.status === 'available').length,
    occupied:  result.filter(b => b.status === 'occupied').length,
    maintenance: result.filter(b => b.status === 'maintenance').length,
  };

  return Response.json({
    success: true,
    summary,
    beds: result,
  });
}
