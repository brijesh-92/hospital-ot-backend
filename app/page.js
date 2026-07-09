'use client';
import { useEffect, useState } from 'react';

const STATUS_COLOR = {
  available:   { bg: '#E8F5E9', text: '#2E7D32', dot: '#43A047' },
  occupied:    { bg: '#FFF3E0', text: '#E65100', dot: '#FB8C00' },
  in_use:      { bg: '#FFF3E0', text: '#E65100', dot: '#FB8C00' },
  maintenance: { bg: '#FFEBEE', text: '#C62828', dot: '#E53935' },
  on_leave:    { bg: '#FFEBEE', text: '#C62828', dot: '#E53935' },
  in_ot:       { bg: '#E3F2FD', text: '#1565C0', dot: '#1E88E5' },
  booked:      { bg: '#F3E5F5', text: '#6A1B9A', dot: '#8E24AA' },
  confirmed:   { bg: '#E8F5E9', text: '#2E7D32', dot: '#43A047' },
};

function Badge({ status }) {
  const c = STATUS_COLOR[status] || { bg: '#F5F5F5', text: '#333', dot: '#999' };
  return (
    <span style={{ background: c.bg, color: c.text, padding: '2px 10px', borderRadius: 20, fontSize: 12, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
      <span style={{ width: 7, height: 7, borderRadius: '50%', background: c.dot, display: 'inline-block' }} />
      {status.replace('_', ' ').toUpperCase()}
    </span>
  );
}

function Card({ title, children, accent = '#2563EB' }) {
  return (
    <div style={{ background: '#fff', borderRadius: 14, boxShadow: '0 2px 12px rgba(0,0,0,0.07)', overflow: 'hidden' }}>
      <div style={{ background: accent, padding: '14px 20px' }}>
        <h2 style={{ color: '#fff', margin: 0, fontSize: 15, fontWeight: 700, letterSpacing: 0.3 }}>{title}</h2>
      </div>
      <div style={{ padding: 18 }}>{children}</div>
    </div>
  );
}

function StatPill({ label, value, color }) {
  return (
    <div style={{ textAlign: 'center', background: '#F8FAFC', borderRadius: 10, padding: '10px 16px', flex: 1 }}>
      <div style={{ fontSize: 24, fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>{label}</div>
    </div>
  );
}

export default function Dashboard() {
  const [beds, setBeds]     = useState(null);
  const [ans, setAns]       = useState(null);
  const [eq, setEq]         = useState(null);
  const [slots, setSlots]   = useState(null);
  const [bookings, setBookings] = useState(null);
  const [loading, setLoading]   = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');

  useEffect(() => {
    Promise.all([
      fetch('/api/beds').then(r => r.json()),
      fetch('/api/anesthesiologists').then(r => r.json()),
      fetch('/api/equipment').then(r => r.json()),
      fetch('/api/ot-slots').then(r => r.json()),
      fetch('/api/book-ot').then(r => r.json()),
    ]).then(([b, a, e, s, bk]) => {
      setBeds(b); setAns(a); setEq(e); setSlots(s); setBookings(bk);
      setLoading(false);
    });
  }, []);

  if (loading) return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F1F5F9' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: 40 }}>🏥</div>
        <p style={{ color: '#64748b', fontFamily: 'sans-serif', marginTop: 12 }}>Loading City General Hospital...</p>
      </div>
    </div>
  );

  const tabs = ['dashboard', 'beds', 'anesthesiologists', 'equipment', 'ot slots', 'api docs'];

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", minHeight: '100vh', background: '#F1F5F9' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #2563EB 100%)', padding: '0 32px', boxShadow: '0 2px 12px rgba(0,0,0,0.15)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '20px 0 0' }}>
            <div style={{ fontSize: 36 }}>🏥</div>
            <div>
              <h1 style={{ color: '#fff', margin: 0, fontSize: 22, fontWeight: 800 }}>City General Hospital</h1>
              <p style={{ color: '#93C5FD', margin: 0, fontSize: 13 }}>Operation Theatre Management System — Live Dashboard</p>
            </div>
            <div style={{ marginLeft: 'auto', background: 'rgba(255,255,255,0.15)', borderRadius: 20, padding: '5px 14px', fontSize: 12, color: '#fff' }}>
              🟢 All Systems Operational
            </div>
          </div>
          {/* Tabs */}
          <div style={{ display: 'flex', gap: 4, paddingTop: 16 }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                style={{ background: activeTab === tab ? '#fff' : 'transparent', color: activeTab === tab ? '#1e3a5f' : '#93C5FD', border: 'none', borderRadius: '8px 8px 0 0', padding: '8px 18px', fontSize: 13, fontWeight: 600, cursor: 'pointer', textTransform: 'capitalize' }}>
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '28px 32px' }}>

        {/* DASHBOARD TAB */}
        {activeTab === 'dashboard' && (
          <div style={{ display: 'grid', gap: 20 }}>
            {/* Summary pills */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
              {[
                { label: 'Beds Available', value: beds.summary.available, color: '#16a34a', total: beds.summary.total },
                { label: 'Anesthesiologists Available', value: ans.summary.available, color: '#2563EB', total: ans.summary.total },
                { label: 'Equipment Ready', value: eq.summary.available, color: '#7C3AED', total: eq.summary.total },
                { label: 'OT Slots Open', value: slots.summary.available, color: '#DC2626', total: slots.summary.total },
              ].map(s => (
                <div key={s.label} style={{ background: '#fff', borderRadius: 14, padding: '20px 24px', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', borderLeft: `5px solid ${s.color}` }}>
                  <div style={{ fontSize: 32, fontWeight: 800, color: s.color }}>{s.value}<span style={{ fontSize: 16, color: '#94a3b8', fontWeight: 400 }}>/{s.total}</span></div>
                  <div style={{ fontSize: 13, color: '#64748b', marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {/* Today's OT Slots */}
              <Card title="📅 Today's OT Schedule" accent="#1e3a5f">
                {slots.slots.filter(s => s.date === new Date().toLocaleDateString('en-CA')).map(s => (
                  <div key={s.slot_id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #F1F5F9' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{s.ot_room} — {s.time}</div>
                      <div style={{ fontSize: 12, color: '#64748b' }}>{s.specialty} · {s.duration_mins} min</div>
                    </div>
                    <Badge status={s.status} />
                  </div>
                ))}
              </Card>

              {/* Anesthesiologist Status */}
              <Card title="👨‍⚕️ Anesthesiologist Status" accent="#7C3AED">
                {ans.anesthesiologists.map(a => (
                  <div key={a.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #F1F5F9' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{a.name}</div>
                      <div style={{ fontSize: 12, color: '#64748b' }}>{a.specialization}</div>
                    </div>
                    <Badge status={a.status} />
                  </div>
                ))}
              </Card>
            </div>

            {/* Recent Bookings */}
            <Card title="✅ Recent OT Bookings" accent="#059669">
              {bookings.bookings.length === 0 ? (
                <p style={{ color: '#94a3b8', fontSize: 14, textAlign: 'center', padding: '20px 0' }}>No bookings yet. Use the Moveworks AI assistant or POST /api/book-ot to create one.</p>
              ) : (
                bookings.bookings.map(b => (
                  <div key={b.booking_id} style={{ padding: '12px 0', borderBottom: '1px solid #F1F5F9' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 700, color: '#1e3a5f' }}>{b.booking_id}</span>
                      <Badge status={b.status} />
                    </div>
                    <div style={{ fontSize: 13, color: '#374151', marginTop: 4 }}>
                      <b>{b.patient_name}</b> · {b.procedure} · {b.ot_room} on {b.date} at {b.time}
                    </div>
                    <div style={{ fontSize: 12, color: '#64748b' }}>Surgeon: {b.surgeon_name} · Booked: {new Date(b.booked_at).toLocaleString()}</div>
                  </div>
                ))
              )}
            </Card>
          </div>
        )}

        {/* BEDS TAB */}
        {activeTab === 'beds' && (
          <Card title="🛏️ Bed Availability" accent="#16a34a">
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <StatPill label="Available" value={beds.summary.available} color="#16a34a" />
              <StatPill label="Occupied"  value={beds.summary.occupied}  color="#DC2626" />
              <StatPill label="Maintenance" value={beds.summary.maintenance} color="#D97706" />
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead><tr style={{ background: '#F8FAFC' }}>
                {['Bed ID','Ward','Type','Status','Patient'].map(h => <th key={h} style={{ textAlign:'left', padding:'10px 12px', fontWeight:700, color:'#374151', borderBottom:'2px solid #E5E7EB' }}>{h}</th>)}
              </tr></thead>
              <tbody>
                {beds.beds.map(b => (
                  <tr key={b.bed_id} style={{ borderBottom:'1px solid #F3F4F6' }}>
                    <td style={{ padding:'10px 12px', fontWeight:600, color:'#1e3a5f' }}>{b.bed_id}</td>
                    <td style={{ padding:'10px 12px' }}>{b.ward}</td>
                    <td style={{ padding:'10px 12px' }}>{b.type}</td>
                    <td style={{ padding:'10px 12px' }}><Badge status={b.status} /></td>
                    <td style={{ padding:'10px 12px', color:'#64748b' }}>{b.patient || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}

        {/* ANESTHESIOLOGISTS TAB */}
        {activeTab === 'anesthesiologists' && (
          <Card title="👨‍⚕️ Anesthesiologist Availability" accent="#7C3AED">
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <StatPill label="Available" value={ans.summary.available} color="#16a34a" />
              <StatPill label="In OT"    value={ans.summary.in_ot}    color="#2563EB" />
              <StatPill label="On Leave" value={ans.summary.on_leave} color="#DC2626" />
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead><tr style={{ background: '#F8FAFC' }}>
                {['ID','Name','Specialization','Shift','Status','Contact'].map(h => <th key={h} style={{ textAlign:'left', padding:'10px 12px', fontWeight:700, color:'#374151', borderBottom:'2px solid #E5E7EB' }}>{h}</th>)}
              </tr></thead>
              <tbody>
                {ans.anesthesiologists.map(a => (
                  <tr key={a.id} style={{ borderBottom:'1px solid #F3F4F6' }}>
                    <td style={{ padding:'10px 12px', fontWeight:600, color:'#1e3a5f' }}>{a.id}</td>
                    <td style={{ padding:'10px 12px', fontWeight:600 }}>{a.name}</td>
                    <td style={{ padding:'10px 12px' }}>{a.specialization}</td>
                    <td style={{ padding:'10px 12px' }}>{a.shift}</td>
                    <td style={{ padding:'10px 12px' }}><Badge status={a.status} /></td>
                    <td style={{ padding:'10px 12px', color:'#64748b', fontSize:12 }}>{a.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}

        {/* EQUIPMENT TAB */}
        {activeTab === 'equipment' && (
          <Card title="🔧 Equipment Status" accent="#DC2626">
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <StatPill label="Available"   value={eq.summary.available}   color="#16a34a" />
              <StatPill label="In Use"      value={eq.summary.in_use}      color="#D97706" />
              <StatPill label="Maintenance" value={eq.summary.maintenance} color="#DC2626" />
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead><tr style={{ background: '#F8FAFC' }}>
                {['ID','Equipment','Category','Status','OT Assigned','Last Serviced'].map(h => <th key={h} style={{ textAlign:'left', padding:'10px 12px', fontWeight:700, color:'#374151', borderBottom:'2px solid #E5E7EB' }}>{h}</th>)}
              </tr></thead>
              <tbody>
                {eq.equipment.map(e => (
                  <tr key={e.equipment_id} style={{ borderBottom:'1px solid #F3F4F6' }}>
                    <td style={{ padding:'10px 12px', fontWeight:600, color:'#1e3a5f' }}>{e.equipment_id}</td>
                    <td style={{ padding:'10px 12px', fontWeight:600 }}>{e.name}</td>
                    <td style={{ padding:'10px 12px' }}>{e.category}</td>
                    <td style={{ padding:'10px 12px' }}><Badge status={e.status} /></td>
                    <td style={{ padding:'10px 12px', color:'#64748b' }}>{e.ot_assigned || '—'}</td>
                    <td style={{ padding:'10px 12px', color:'#64748b' }}>{e.last_serviced}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}

        {/* OT SLOTS TAB */}
        {activeTab === 'ot slots' && (
          <Card title="📅 OT Slot Schedule" accent="#0891b2">
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <StatPill label="Available" value={slots.summary.available} color="#16a34a" />
              <StatPill label="Booked"   value={slots.summary.booked}   color="#7C3AED" />
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead><tr style={{ background: '#F8FAFC' }}>
                {['Slot ID','OT Room','Date','Time','Duration','Specialty','Status','Surgeon'].map(h => <th key={h} style={{ textAlign:'left', padding:'10px 12px', fontWeight:700, color:'#374151', borderBottom:'2px solid #E5E7EB' }}>{h}</th>)}
              </tr></thead>
              <tbody>
                {slots.slots.map(s => (
                  <tr key={s.slot_id} style={{ borderBottom:'1px solid #F3F4F6' }}>
                    <td style={{ padding:'10px 12px', fontWeight:600, color:'#1e3a5f' }}>{s.slot_id}</td>
                    <td style={{ padding:'10px 12px', fontWeight:600 }}>{s.ot_room}</td>
                    <td style={{ padding:'10px 12px' }}>{s.date}</td>
                    <td style={{ padding:'10px 12px' }}>{s.time}</td>
                    <td style={{ padding:'10px 12px' }}>{s.duration_mins} min</td>
                    <td style={{ padding:'10px 12px' }}>{s.specialty}</td>
                    <td style={{ padding:'10px 12px' }}><Badge status={s.status} /></td>
                    <td style={{ padding:'10px 12px', color:'#64748b' }}>{s.booked_by || '—'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        )}

        {/* API DOCS TAB */}
        {activeTab === 'api docs' && (
          <div style={{ display: 'grid', gap: 16 }}>
            <div style={{ background: '#1e293b', borderRadius: 14, padding: 24, color: '#e2e8f0' }}>
              <h2 style={{ color: '#93C5FD', margin: '0 0 8px', fontSize: 16 }}>🔌 Hospital OT System — REST API</h2>
              <p style={{ color: '#94a3b8', margin: '0 0 20px', fontSize: 13 }}>All endpoints return JSON. Use these in Moveworks HTTP Actions.</p>
              {[
                { method: 'GET', path: '/api/beds', desc: 'Get all bed availability', params: '?type=ICU&status=available' },
                { method: 'GET', path: '/api/anesthesiologists', desc: 'Get anesthesiologist availability', params: '?status=available&shift=Morning' },
                { method: 'GET', path: '/api/equipment', desc: 'Get equipment status', params: '?category=Cardiac&status=available' },
                { method: 'GET', path: '/api/ot-slots', desc: 'Get OT slot availability', params: '?date=2026-06-29&status=available' },
                { method: 'GET', path: '/api/patient-status', desc: 'Get patient pre-op status', params: '?patient_id=P-1001' },
                { method: 'POST', path: '/api/book-ot', desc: 'Book an OT slot', params: 'Body: { slot_id, surgeon_name, patient_name, procedure, ... }' },
                { method: 'GET', path: '/api/book-ot', desc: 'Get all bookings', params: '' },
              ].map(api => (
                <div key={api.path} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 0', borderBottom: '1px solid #334155' }}>
                  <span style={{ background: api.method === 'GET' ? '#065f46' : '#7C3AED', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 6, minWidth: 44, textAlign: 'center', marginTop: 2 }}>{api.method}</span>
                  <div>
                    <code style={{ color: '#93C5FD', fontSize: 14 }}>{api.path}</code>
                    <div style={{ color: '#94a3b8', fontSize: 12, marginTop: 3 }}>{api.desc}</div>
                    {api.params && <div style={{ color: '#6EE7B7', fontSize: 11, marginTop: 2 }}>{api.params}</div>}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: '#1e293b', borderRadius: 14, padding: 24, color: '#e2e8f0' }}>
              <h3 style={{ color: '#93C5FD', margin: '0 0 12px', fontSize: 14 }}>📋 Sample POST /api/book-ot Body</h3>
              <pre style={{ background: '#0f172a', borderRadius: 8, padding: 16, fontSize: 13, color: '#6EE7B7', overflow: 'auto' }}>{`{
  "slot_id": "SLOT-001",
  "surgeon_name": "Dr. S. Iyer",
  "patient_name": "Rajesh Kumar",
  "patient_id": "P-1001",
  "procedure": "Appendectomy",
  "anesthesiologist_id": "ANS-001",
  "bed_id": "BED-201",
  "notes": "Patient allergic to Penicillin"
}`}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
