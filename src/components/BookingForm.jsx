import { useState } from 'react'
import { Icon, Btn } from './ui'
import { clinic, services } from '../content/chidambaram'

const field =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 transition-all duration-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 focus:outline-none'

export default function BookingForm({ id, treatment, setTreatment, dark = false }) {
  const [form, setForm] = useState({ name: '', phone: '', date: '' })
  const [errors, setErrors] = useState({})
  const [done, setDone] = useState(false)
  const [busy, setBusy] = useState(false)

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const submit = async (e) => {
    e.preventDefault()
    const er = {}
    if (form.name.trim().length < 2) er.name = 'Please enter your name'
    if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(form.phone.replace(/[\s-]/g, ''))) er.phone = 'Enter a valid 10-digit mobile number'
    setErrors(er)
    if (Object.keys(er).length) return

    setBusy(true)
    const payload = { ...form, treatment: treatment || 'Not specified', clinic: 'Chidambaram' }
    const endpoint = import.meta.env.VITE_FORM_ENDPOINT
    try {
      if (endpoint) {
        const r = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
        if (!r.ok) throw new Error('failed')
      } else {
        const msg = `Appointment request - AVM Smiles Chidambaram%0AName: ${payload.name}%0APhone: ${payload.phone}%0ADate: ${payload.date || 'Flexible'}%0ATreatment: ${payload.treatment}`
        window.open(`${clinic.whatsappHref}?text=${msg}`, '_blank', 'noopener')
      }
      setDone(true)
    } catch {
      setErrors({ form: 'Something went wrong. Please call us or message on WhatsApp.' })
    } finally {
      setBusy(false)
    }
  }

  if (done) {
    return (
      <div className="rounded-3xl bg-white p-8 text-center shadow-[0_18px_48px_-16px_rgba(40,36,89,.35)]">
        <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-600"><Icon name="CircleCheck" size={32} /></span>
        <h3 className="mt-4 text-xl font-semibold text-brand-900">Request received</h3>
        <p className="mt-2 text-sm text-muted">Thank you. Our team will contact you shortly to confirm your appointment.</p>
        <button onClick={() => setDone(false)} className="mt-5 text-sm font-semibold text-brand-600 hover:underline cursor-pointer">Book another</button>
      </div>
    )
  }

  return (
    <form id={id} onSubmit={submit} noValidate className={`rounded-3xl p-6 sm:p-8 ${dark ? 'bg-white' : 'bg-white'} shadow-[0_18px_48px_-16px_rgba(40,36,89,.35)] border border-line`}>
      <h3 className="text-lg font-semibold text-brand-900 flex items-center gap-2">
        <Icon name="CalendarCheck" className="text-accent" /> Schedule Your Appointment
      </h3>
      <div className="mt-5 grid gap-4">
        <div>
          <label htmlFor={`${id}-name`} className="mb-1.5 block text-xs font-medium text-muted">Name</label>
          <input id={`${id}-name`} className={field} placeholder="Your full name" value={form.name} onChange={set('name')} autoComplete="name" aria-invalid={!!errors.name} />
          {errors.name && <p className="mt-1 text-xs text-accent flex items-center gap-1"><Icon name="CircleAlert" size={14} />{errors.name}</p>}
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className="mb-1.5 block text-xs font-medium text-muted">Phone Number</label>
          <input id={`${id}-phone`} className={field} placeholder="10-digit mobile number" inputMode="tel" value={form.phone} onChange={set('phone')} autoComplete="tel" aria-invalid={!!errors.phone} />
          {errors.phone && <p className="mt-1 text-xs text-accent flex items-center gap-1"><Icon name="CircleAlert" size={14} />{errors.phone}</p>}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor={`${id}-date`} className="mb-1.5 block text-xs font-medium text-muted">Preferred Date</label>
            <input id={`${id}-date`} type="date" className={field} value={form.date} onChange={set('date')} min={new Date().toISOString().slice(0, 10)} />
          </div>
          <div>
            <label htmlFor={`${id}-tx`} className="mb-1.5 block text-xs font-medium text-muted">Treatment Required</label>
            <select id={`${id}-tx`} className={field} value={treatment} onChange={(e) => setTreatment(e.target.value)}>
              <option value="">Select treatment</option>
              {services.map((s) => <option key={s.slug}>{s.title}</option>)}
              <option>General Checkup</option>
            </select>
          </div>
        </div>
        {errors.form && <p className="text-xs text-accent">{errors.form}</p>}
        <Btn variant="accent" type="submit" disabled={busy} className="w-full mt-1">
          {busy ? <Icon name="Loader" className="animate-spin" size={18} /> : <Icon name="Send" size={18} />}
          Book Appointment
        </Btn>
      </div>
    </form>
  )
}
