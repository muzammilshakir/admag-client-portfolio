import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout'
import HomeOne from '../components/main/home-one'
export default function Home() {
  return (
    <>
      <Layout />
      <HomeOne />
    </>
  )
}
