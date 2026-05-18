import { redirect } from "next/navigation";

export default function RootPage() {
  // App routes live under /(main)/[locale]/...
  redirect("/en");
}

