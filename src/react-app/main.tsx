import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MaintenanceForm from "./MaintenanceForm.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
		<MaintenanceForm />
	</StrictMode>,
);
