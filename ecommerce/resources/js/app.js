import "./bootstrap";
import "preline";
import "../css/app.css";

document.addEventListener("DOMContentLoaded", () => {
    window.HSStaticMethods?.autoInit();
});

document.addEventListener("livewire:navigated", () => {
    window.HSStaticMethods?.autoInit();
});