import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MaintenanceForm from "./MaintenanceForm.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<MaintenanceForm />
	</StrictMode>,
);
