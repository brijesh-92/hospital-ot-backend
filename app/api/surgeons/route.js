import { surgeons } from '../../data';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const specialty = searchParams.get('specialty');
  const name      = searchParams.get('name');
  const available = searchParams.get('available');

  let result = [...surgeons];
  if (specialty) result = result.filter(s => s.specialty.toLowerCase().includes(specialty.toLowerCase()));
  if (name)      result = result.filter(s => s.name.toLowerCase().includes(name.toLowerCase()) || s.short_name.toLowerCase().includes(name.toLowerCase()));
  if (available) result = result.filter(s => s.available === (available === 'true'));

  return Response.json({ success: true, total: result.length, surgeons: result });
}
