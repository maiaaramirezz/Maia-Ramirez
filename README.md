# Documentación del Proyecto: Contextos de Uso e IPO

## 1. Definición del Público Objetivo
*De acuerdo a la consigna 3.1: Caracterización del usuario final.*

El proyecto está diseñado para satisfacer las necesidades del siguiente perfil de usuario:

* **Rango etario:** 18 a 35 años (Nativos digitales y Millenials).
* **Nacionalidad y Ubicación:** Argentina, principalmente usuarios de zonas urbanas con acceso a redes 4G/5G y Wi-Fi estable.
* **Perfil Socio-Educativo:** Estudiantes universitarios y jóvenes profesionales con nivel educativo superior (en curso o finalizado).
* **Alfabetización Digital:** Alta. Usuarios habituados al uso intensivo de redes sociales, aplicaciones bancarias y plataformas de streaming.
* **Contexto de Acceso:** Uso híbrido. Acceso predominante mediante smartphones (Android/iOS) en situaciones de movilidad (transporte público, esperas) y laptops en entornos de oficina o estudio.
* **Idioma Principal:** Español (con modismos locales de Argentina para mejorar la cercanía).

---

## 2. Design Inspirations & Creative Process
*According to instruction 3.2: Visual references and design rationale.*

### 2.1 Design Inspirations
* **Airbnb:** I took inspiration from this site's navigation system. Its clean use of **visual hierarchy** and the "search-to-action" flow allows users to find information quickly, which is essential for our target audience.
* **Duolingo:** The color palette and micro-interactions were inspired by this project. It balances aesthetics with **WCAG accessibility standards** (high contrast and clear visual cues), ensuring high readability and engagement.
* **Material Design 3 (Google):** I followed these guidelines to ensure that the interactive elements (floating action buttons and cards) feel familiar and intuitive, especially for Android mobile users.

### 2.2 Creative Process Documentation
The development of this interface followed a **User-Centered Design (UCD)** approach:

1.  **Conceptualization:** The focus was to reduce the **cognitive load** by simplifying the information architecture. Unlike the "Japanese website" model mentioned in our study (which focuses on information density), this project opts for a minimalist layout to avoid visual clutter and decision paralysis.
2.  **Design Decisions:** * I implemented a **Responsive Web Design** using a flexible grid to ensure a seamless transition between desktop and mobile contexts.
    * A **mobile-first** strategy was chosen, prioritizing large touch-friendly targets (minimum 44x44px) to accommodate "on-the-go" usage.
3.  **Discarded Alternatives:** Initially, a complex multi-level hover navigation was considered (similar to legacy desktop software), but it was discarded because it provided a poor experience on touch screens and lacked clear **feedback**.
4.  **Final Refinement:** The final layout focuses on **affordance**, making sure that every clickable element is clearly identifiable through shadows and color changes. This prevents the usability issues seen in "bad UI" examples like the PS3 search interface, where navigation was non-intuitive.
5.  **Error Prevention:** Following Nielsen’s Heuristics, I implemented real-time validation in forms. This prevents the "confusing navigation flows" seen in bad UI examples like the PS3 search interface, providing immediate feedback to the user.
