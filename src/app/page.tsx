"use client"
import React,{useState,useEffect} from "react";
import Image from "next/image";
import Desktop from "@/components/desktop/Desktop";

import Loader from "@/components/loader/Loader";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; 
  }
  return (
    <Desktop/>
  );
}
