import React from 'react'

export default function GoogleMap() {
  return (
    <div className="flex justify-center">
      <iframe
        title="3S Lab Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.3872874645085!2d127.1280233!3d37.451576800000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca8a5b5998fd7%3A0x64b2aab7dc1178b8!2z6rCA7LKc64yA7ZWZ6rWQIOqzteqzvOuMgO2VmTE!5e0!3m2!1sko!2skr!4v1727057014743!5m2!1sko!2skr"
        width="100%"
        height="450"
        className="rounded-lg shadow-lg max-w-4xl"
        style={{ border: 0 }}
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
