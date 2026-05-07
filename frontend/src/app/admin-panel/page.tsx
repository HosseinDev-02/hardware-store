import Sidebar from "@/components/panel/Sidebar";
import { redirect } from "next/navigation";

export default function Home() {
    return (
        redirect('/admin-panel/dashboard')
    );
}
