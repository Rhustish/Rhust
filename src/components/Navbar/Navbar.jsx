import React from 'react'
import Link from "next/link"
import "@/components/Navbar/Navbar.css"
import {VT323} from "next/font/google"

const hfont = VT323({
    subsets:["latin"],
    weight:"400"
})

export default function Navbar() {
  return (
    <nav className={`navholder ${hfont.className} `}>
        <Link href={`/`} >{`</home>`}</Link>
        <Link href={`/repertoire`} >{`</repertoire>`}</Link>
        <Link href={`/work`} >{`</work>`}</Link>
        <Link href={`/about`} >{`</about>`}</Link>
        <Link href={`/contact`} >{`</contact>`}</Link>
    </nav>
  )
}
