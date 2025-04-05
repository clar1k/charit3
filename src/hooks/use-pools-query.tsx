"use client";
import { abi } from "@/abi";
import { useReadContract } from "wagmi";
const address = "0x8949F76a84fd9D5023fbf1A58B4489F5b6C0508A";

export const useFundraisesQuery = () => {
  console.log("hello");
  return useReadContract({
    abi,
    address,
    functionName: "fundraises",
    args: [],
    query: {
      enabled: true,
    },
  });
};
