import React,{useState} from 'react';
export default function BookingPage({apiBase='http://localhost:5000/api'}){
  const [form,setForm]=useState({destination:'',checkIn:'',checkOut:'',guests:1});
  const [msg,setMsg]=useState('');
  const handle=(e)=>setForm({...form,[e.target.name]:e.target.value});
  const book=async()=>{
    try{
      const r=await fetch(apiBase+'/book',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)});
      const d=await r.json();
      setMsg('✅ Booking Success! ID: '+d.bookingId);
    }catch{setMsg('❌ Booking Failed');}
  };
  return (<div className='p-6'>
    <h2 className='text-xl mb-4'>Booking Page</h2>
    <input name='destination' placeholder='Destination' onChange={handle} className='border p-2 mr-2'/>
    <input name='checkIn' type='date' onChange={handle} className='border p-2 mr-2'/>
    <input name='checkOut' type='date' onChange={handle} className='border p-2 mr-2'/>
    <input name='guests' type='number' min={1} onChange={handle} value={form.guests} className='border p-2 mr-2'/>
    <button onClick={book} className='bg-green-600 text-white px-3 py-2 rounded'>Book Now</button>
    <div className='mt-4'>{msg}</div>
  </div>);
}