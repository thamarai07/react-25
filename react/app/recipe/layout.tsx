"use client";
import Navbar from "@/components/recipe/components/Navba";
import RecipePassContext from "./context/context";
import "./style.scss";


export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <RecipePassContext>
      <section>
        <Navbar />
        {children}
      </section>
    </RecipePassContext>
  );
}
