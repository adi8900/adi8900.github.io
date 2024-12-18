"use client"
import { useParams } from 'next/navigation';

export default function DynamicMealPage() {
  const { someName } = useParams();

  return <h1>Meal: {someName}</h1>;
}