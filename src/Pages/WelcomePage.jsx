import React from 'react'

export default function WelcomePage() {
    const msg = new URLSearchParams(window.location.search).get('message');
    return <p>{`Welcome! ${msg}`}</p>
}
