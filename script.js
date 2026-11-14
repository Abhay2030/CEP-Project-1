/* =========================================================
   RENEWABLE ENERGY WEBSITE
   This file controls the website's buttons, cards and calculator.
   ========================================================= */

// A short helper to find an HTML element by its ID.
function getElement(id) {
    return document.getElementById(id);
}

// ---------------------------------------------------------
// 1. Navigation links
// ---------------------------------------------------------
const navigationItems = [
    ["home", "Home"],
    ["solar", "Solar Energy"],
    ["renewable", "Renewable Energy"],
    ["applications", "Applications"],
    ["benefits", "Benefits"],
    ["install", "Solar Installation"],
    ["project", "Our Project"],
    ["about", "About Us"]
];

function createNavigationLinks() {
    const links = navigationItems.map(function (item) {
        return `<a href="#${item[0]}">${item[1]}</a>`;
    }).join("");

    getElement("navLinks").innerHTML = links;
    getElement("footerNavigation").innerHTML = `<strong>Navigate</strong>${links}`;
}

// ---------------------------------------------------------
// 2. Project team cards
// ---------------------------------------------------------
const teamMembers = [
    {
        name: "Atharva Sandeep Bhalerao",
        image: "images/atharva.jpg"
    },
    {
        name: "Krushna Somnath Kapdi",
        image: "images/krushna.jpg"
    },
    {
        name: "Vedant Rayate",
        image: "images/vedant.jpg"
    },
    {
        name: "Ganesh Dattatray Khade",
        image: ""
    }
];

function showTeamMembers() {
    const teamHTML = teamMembers.map(function (member) {
        let photoHTML;

        if (member.image) {
            photoHTML = `<img class="team-photo" src="${member.image}" alt="${member.name}" loading="lazy">`;
        } else {
            photoHTML = `<div class="team-avatar" aria-hidden="true">GK</div>`;
        }

        return `
            <article class="card team-card reveal">
                ${photoHTML}
                <h3>${member.name}</h3>
                <p class="small-text">Second Year Engineering</p>
                <p class="small-text">Information Technology</p>
                <p class="small-text">Sir Visvesvaraya Institute of Technology, Sinnar, Maharashtra</p>
            </article>
        `;
    }).join("");

    getElement("teamCards").innerHTML = teamHTML;
}

// ---------------------------------------------------------
// 3. How a solar panel works
// ---------------------------------------------------------
const solarSteps = [
    {
        title: "Sunlight",
        description: "Photons from the Sun strike the panel, passing through the anti-reflective glass to the silicon cells."
    },
    {
        title: "Excitation",
        description: "Photons with enough energy knock electrons loose in the silicon (photovoltaic effect), creating electron–hole pairs."
    },
    {
        title: "Junction",
        description: "The p–n junction's built-in electric field pushes electrons toward the n-side and holes toward the p-side."
    },
    {
        title: "Current",
        description: "Metal contacts collect electrons. When connected to a load, they flow as direct current (DC)."
    },
    {
        title: "Inverter",
        description: "An inverter converts DC into alternating current (AC) for homes, industry and the grid."
    }
];

function showSolarStep(stepNumber) {
    const buttons = document.querySelectorAll("#solarStepButtons button");

    buttons.forEach(function (button, index) {
        button.classList.toggle("active", index === stepNumber);
    });

    getElement("solarStepText").textContent = solarSteps[stepNumber].description;
}

function createSolarStepButtons() {
    const buttonsHTML = solarSteps.map(function (step, index) {
        return `<button class="step-button" type="button" data-step="${index}">${index + 1}. ${step.title}</button>`;
    }).join("");

    getElement("solarStepButtons").innerHTML = buttonsHTML;

    getElement("solarStepButtons").addEventListener("click", function (event) {
        const button = event.target.closest("button[data-step]");

        if (button) {
            showSolarStep(Number(button.dataset.step));
        }
    });

    showSolarStep(0);
}

// ---------------------------------------------------------
// 4. Solar energy topics
// ---------------------------------------------------------
const solarTopics = [
    ["PV Technology", "Cells made from semiconductors (mostly silicon) convert light directly to DC electricity with no moving parts."],
    ["Solar Thermal", "Collectors absorb heat to warm water (rooftop heaters) or produce steam in concentrated solar power plants."],
    ["Monocrystalline", "Cut from single silicon crystals. Highest efficiency (about 20–23%), uniform dark look, higher price."],
    ["Polycrystalline", "Made from many fused crystals. Slightly lower efficiency and cost; historically popular."],
    ["Thin-Film", "Thin semiconductor layers (e.g. CdTe) on glass or metal. Lighter and flexible, lower efficiency per area."],
    ["System Components", "Panels, inverter, charge controller (battery systems), batteries, mounting structures, DC/AC wiring, protection and earthing."],
    ["On-Grid", "Connected to the utility grid; exports surplus power under net metering. No batteries needed."],
    ["Off-Grid", "Independent of the grid; uses batteries and a charge controller. Common in remote areas."],
    ["Hybrid", "Grid-connected with battery backup, giving savings plus power during outages."],
    ["Rooftop vs Ground-Mounted", "Rooftops serve homes and businesses on existing space; ground-mounted farms generate bulk power at lower cost per watt."],
    ["Generation & Storage", "Output follows sunlight, so batteries (e.g. lithium-ion), pumped hydro or grid balancing shift energy to evening demand."]
];

// ---------------------------------------------------------
// 5. Renewable energy sources and their details
// ---------------------------------------------------------
const renewableSources = [
    {
        name: "Solar",
        definition: "Converts sunlight to electricity or heat.",
        working: "PV cells use the photovoltaic effect; thermal systems absorb heat.",
        components: "Panels, inverters, mounting, batteries.",
        applications: "Rooftops, solar parks, pumps, heaters.",
        advantages: "Low running cost, scalable, no emissions in operation.",
        limitations: "Intermittent, land needs, storage cost.",
        impact: "Manufacturing and end-of-life panel recycling are the main impacts."
    },
    {
        name: "Wind",
        definition: "Uses moving air to turn turbines.",
        working: "Blades turn a rotor and generator; wind kinetic energy becomes electricity.",
        components: "Blades, nacelle, gearbox, generator, tower.",
        applications: "Onshore/offshore wind farms.",
        advantages: "Mature, low operating emissions, quick to build.",
        limitations: "Variable, siting and noise concerns.",
        impact: "Bird/bat impact and visual effects; low lifecycle emissions."
    },
    {
        name: "Hydroelectric",
        definition: "Electricity from flowing or falling water.",
        working: "Water drives a turbine connected to a generator.",
        components: "Dam, penstock, turbine, generator.",
        applications: "Large dams, run-of-river, pumped storage.",
        advantages: "Dispatchable, long life, storage capability.",
        limitations: "Site-limited, rainfall dependent.",
        impact: "Can alter ecosystems and displace communities."
    },
    {
        name: "Geothermal",
        definition: "Heat from within the Earth.",
        working: "Steam or hot fluid from wells spins turbines or heats directly.",
        components: "Production wells, heat exchangers, turbines.",
        applications: "Power plants, district heating, heat pumps.",
        advantages: "Steady 24x7 output, small footprint.",
        limitations: "Location-specific, drilling cost.",
        impact: "Low emissions; possible local water and seismic issues."
    },
    {
        name: "Biomass",
        definition: "Energy from organic matter.",
        working: "Combustion, gasification or biogas digestion release energy.",
        components: "Feedstock handling, boiler/digester, generator.",
        applications: "Cooking, CHP plants, biogas, biofuels.",
        advantages: "Uses waste, dispatchable.",
        limitations: "Feedstock supply, air emissions.",
        impact: "Can be near carbon-neutral if sourced sustainably."
    },
    {
        name: "Tidal",
        definition: "Energy from tides.",
        working: "Rising and falling tides drive turbines in barrages or streams.",
        components: "Barrage or tidal turbines, generators, cables.",
        applications: "Coastal tidal power stations.",
        advantages: "Highly predictable.",
        limitations: "High cost, few sites.",
        impact: "Marine habitat disturbance."
    },
    {
        name: "Wave",
        definition: "Energy from surface waves.",
        working: "Wave motion drives floating or fixed converters.",
        components: "Wave energy converters, moorings, subsea cables.",
        applications: "Pilot coastal projects.",
        advantages: "Large resource, predictable.",
        limitations: "Early stage, harsh conditions.",
        impact: "Limited local marine impact, still being studied."
    },
    {
        name: "Green Hydrogen",
        definition: "Hydrogen made by electrolysis using renewable power.",
        working: "Electrolysers split water into hydrogen and oxygen.",
        components: "Electrolyser, renewable supply, storage, fuel cells.",
        applications: "Fertiliser, steel, shipping, storage.",
        advantages: "Decarbonises hard-to-abate sectors, stores energy.",
        limitations: "Costly, energy-intensive, infrastructure needed.",
        impact: "Near-zero emissions if powered by renewables; needs water."
    }
];

const energyLabels = [
    ["definition", "Definition"],
    ["working", "Working Principle"],
    ["components", "Main Components"],
    ["applications", "Applications"],
    ["advantages", "Advantages"],
    ["limitations", "Limitations"],
    ["impact", "Environmental Impact"]
];

function showRenewableDetails(sourceIndex) {
    const selectedSource = renewableSources[sourceIndex];
    const tabs = document.querySelectorAll("#energyTabs button");

    tabs.forEach(function (tab, index) {
        tab.classList.toggle("active", index === sourceIndex);
    });

    let informationHTML = "";

    energyLabels.forEach(function (label) {
        informationHTML += `
            <div>
                <strong>${label[1]}</strong>
                <p>${selectedSource[label[0]]}</p>
            </div>
        `;
    });

    getElement("energyDetails").innerHTML = `
        <h3>${selectedSource.name} Energy</h3>
        <div class="energy-information">${informationHTML}</div>
    `;
}

function createRenewableTabs() {
    const tabsHTML = renewableSources.map(function (source, index) {
        return `<button class="energy-tab" type="button" data-source="${index}">${source.name}</button>`;
    }).join("");

    getElement("energyTabs").innerHTML = tabsHTML;

    getElement("energyTabs").addEventListener("click", function (event) {
        const button = event.target.closest("button[data-source]");

        if (button) {
            showRenewableDetails(Number(button.dataset.source));
        }
    });

    showRenewableDetails(0);
}

// ---------------------------------------------------------
// 6. Reusable card creator
// ---------------------------------------------------------
function createCards(items) {
    return items.map(function (item) {
        return `
            <article class="card reveal">
                <h3>${item[0]}</h3>
                <p>${item[1]}</p>
            </article>
        `;
    }).join("");
}

// Solar benefits
const benefits = [
    ["Clean Electricity", "No fuel burning during operation."],
    ["Lower Emissions", "Displaces coal and gas generation."],
    ["Less Fossil Dependence", "Reduces fuel imports and price exposure."],
    ["Long-Term Savings", "Low running cost over 25+ year panel life."],
    ["Energy Independence", "Locally generated power."],
    ["Low Maintenance", "Mostly cleaning and periodic inspection."],
    ["Renewable", "Sunlight is available daily."],
    ["Rural Electrification", "Mini-grids and pumps reach remote areas."],
    ["Jobs", "Manufacturing, installation and O&M roles."],
    ["India's Energy Security", "Diversifies the national energy mix."]
];

// Solar limitations and challenges
const challenges = [
    ["Upfront Cost", "Higher initial investment, offset by savings."],
    ["Intermittency", "No generation at night."],
    ["Weather", "Clouds and dust reduce output."],
    ["Storage", "Batteries add cost."],
    ["Land", "Utility plants need large areas."],
    ["Recycling", "Panel end-of-life recycling is still developing."],
    ["Grid Integration", "Variable supply needs flexible grids."]
];

// Common solar applications
const applications = [
    ["Residential Rooftops", "Home electricity and bill reduction."],
    ["Commercial Buildings", "Offices and malls cut daytime power cost."],
    ["Industry", "Captive solar for factories."],
    ["Agricultural Pumps", "Replace diesel and grid pumps."],
    ["Street Lights", "Standalone lamps with battery."],
    ["Water Heaters", "Solar thermal heating."],
    ["Solar Vehicles", "Solar-assisted EVs and charging."],
    ["Charging Stations", "Solar-supported EV charging."],
    ["Railway Stations", "Roof and platform generation."],
    ["Hospitals & Schools", "Reliable, low-cost power."],
    ["Remote Villages", "Off-grid and mini-grid supply."],
    ["Satellites", "PV arrays power spacecraft."],
    ["Irrigation", "Solar-powered farm irrigation."],
    ["Solar Parks", "Utility-scale generation."]
];

// Information about solar energy in India
const indiaInformation = [
    ["Solar Potential", "India receives high solar radiation across most regions (MNRE)."],
    ["Targets", "500 GW non-fossil capacity by 2030 (Government of India)."],
    ["PM Surya Ghar: Muft Bijli Yojana", "Launched in 2024 to install rooftop solar in one crore households, with central financial assistance. Check the portal for current terms."],
    ["PM-KUSUM", "Supports solar pumps, feeder solarisation and small solar plants for farmers (MNRE)."],
    ["Role of MNRE", "Nodal ministry for policy, schemes and targets."],
    ["Maharashtra & Nashik", "Strong irradiation and large agriculture and industry demand make rooftop, pump and captive solar attractive."]
];

function showGeneralCards() {
    getElement("solarTopics").innerHTML = createCards(solarTopics);
    getElement("benefitCards").innerHTML = createCards(benefits);
    getElement("challengeCards").innerHTML = createCards(challenges);
    getElement("applicationCards").innerHTML = createCards(applications);
    getElement("indiaCards").innerHTML = createCards(indiaInformation);
}

// ---------------------------------------------------------
// 7. Solar installation timeline
// ---------------------------------------------------------
const installationSteps = [
    ["Site Selection", "Flat, shadow-free land or roof, grid access, legal clearance."],
    ["Radiation Assessment", "Check irradiance data (e.g. NIWE/NREL datasets)."],
    ["Land & Capacity Planning", "About 4–5 acres per MW (utility); size from consumption."],
    ["Equipment Selection", "Panels, inverters, structures matched to site and budget."],
    ["Electrical Design", "Cables, protection, earthing, transformers, metering."],
    ["Installation", "Mount structures, panels, wiring, inverter."],
    ["Testing & Commissioning", "Inspection, insulation and performance tests, grid sync."],
    ["Operation & Monitoring", "Cleaning, remote monitoring, preventive maintenance."]
];

function showInstallationSteps() {
    const stepsHTML = installationSteps.map(function (step, index) {
        return `
            <div class="timeline-item">
                <strong>${index + 1}. ${step[0]}</strong>
                <p>${step[1]}</p>
            </div>
        `;
    }).join("");

    getElement("installationSteps").innerHTML = stepsHTML;
}

// ---------------------------------------------------------
// 8. Solar calculator
// ---------------------------------------------------------
function calculateSolarSystem() {
    // Read the three values entered by the visitor.
    const monthlyUnits = Math.max(0, Number(getElement("monthlyUnits").value) || 0);
    const availableArea = Math.max(0, Number(getElement("availableArea").value) || 0);
    const tariff = Math.max(0, Number(getElement("electricityTariff").value) || 0);

    // Estimate capacity from electricity use and available roof area.
    const capacityNeeded = monthlyUnits / 120;
    const capacityThatFits = availableArea / 10;
    const suggestedCapacity = Math.min(capacityNeeded, capacityThatFits);

    // Estimate the number of 550-watt solar panels.
    const panelCount = Math.ceil((suggestedCapacity * 1000) / 550);

    // Estimate yearly savings using the entered electricity tariff.
    const yearlySavings = suggestedCapacity * 120 * tariff * 12;

    const areaIsLimiting = capacityThatFits < capacityNeeded;

    getElement("calculatorResult").innerHTML = `
        Suggested capacity: <strong>${suggestedCapacity.toFixed(1)} kW</strong><br>
        Approx. panels (550 W): <strong>${panelCount}</strong><br>
        Indicative savings: <strong>₹${Math.round(yearlySavings).toLocaleString("en-IN")}/year</strong><br>
        <span class="small-text">
            Estimate only. Assumes about 4 units per kW per day and 10 m² per kW${areaIsLimiting ? " (area-limited)" : ""}. Not a quotation.
        </span>
    `;
}

function setupSolarCalculator() {
    const inputIDs = ["monthlyUnits", "availableArea", "electricityTariff"];

    inputIDs.forEach(function (id) {
        getElement(id).addEventListener("input", calculateSolarSystem);
    });

    calculateSolarSystem();
}

// ---------------------------------------------------------
// 9. Solar providers and official websites
// ---------------------------------------------------------
const solarResources = [
    ["Tata Power Solar", "https://www.tatapowersolar.com/", "Private", "Solar modules, rooftop and EPC solutions."],
    ["Waaree Energies", "https://waaree.com/", "Private", "Solar module manufacturer and solutions."],
    ["Adani Solar", "https://www.adanisolar.com/", "Private", "Solar cell and module manufacturing."],
    ["Vikram Solar", "https://www.vikramsolar.com/", "Private", "Modules, EPC and projects."],
    ["Loom Solar", "https://www.loomsolar.com/", "Private", "Panels, inverters and home systems."],
    ["PM Surya Ghar Portal", "https://pmsuryaghar.gov.in/", "Government", "Official portal of the rooftop solar scheme."],
    ["MNRE", "https://mnre.gov.in/", "Government", "Ministry of New and Renewable Energy."],
    ["National Portal for Rooftop Solar", "https://solarrooftop.pmsuryaghar.gov.in/", "Government", "Apply, find vendors and track subsidy."]
];

function showSolarResources() {
    const resourcesHTML = solarResources.map(function (resource) {
        const name = resource[0];
        const url = resource[1];
        const type = resource[2];
        const description = resource[3];
        const governmentClass = type === "Government" ? "tag-government" : "";

        return `
            <article class="card reveal">
                <span class="tag ${governmentClass}">${type}</span>
                <h3>${name}</h3>
                <p>${description}</p>
                <a class="resource-link" href="${url}" target="_blank" rel="noopener noreferrer">Visit official website ↗</a>
            </article>
        `;
    }).join("");

    getElement("resourceCards").innerHTML = resourcesHTML;
}

// ---------------------------------------------------------
// 10. (Removed — no longer using photo placeholders)
// ---------------------------------------------------------

// ---------------------------------------------------------
// 11. Frequently asked questions
// ---------------------------------------------------------
const frequentlyAskedQuestions = [
    ["How much does a home solar system cost?", "Prices vary by capacity, equipment and location. Get quotes from MNRE-empanelled vendors."],
    ["Do panels work on cloudy days?", "Yes, at reduced output."],
    ["How long do panels last?", "Typically 25 years or more, with gradual efficiency decline."],
    ["On-grid or hybrid?", "On-grid is cheapest. Hybrid adds backup but costs more."],
    ["Is there a subsidy?", "PM Surya Ghar offers central financial assistance; verify eligibility on the official portal."],
    ["How much maintenance is needed?", "Periodic cleaning and inspection."]
];

function showFAQs() {
    const faqHTML = frequentlyAskedQuestions.map(function (faq) {
        return `
            <details>
                <summary>${faq[0]}</summary>
                <p>${faq[1]}</p>
            </details>
        `;
    }).join("");

    getElement("faqList").innerHTML = faqHTML;
}

// ---------------------------------------------------------
// 12. References and sources
// ---------------------------------------------------------
const references = [
    ["IRENA — Renewable Capacity Statistics", "https://www.irena.org/Publications"],
    ["International Energy Agency", "https://www.iea.org/"],
    ["NREL — Solar Research", "https://www.nrel.gov/solar/"],
    ["MNRE", "https://mnre.gov.in/"],
    ["PM Surya Ghar", "https://pmsuryaghar.gov.in/"],
    ["National Portal for Rooftop Solar", "https://solarrooftop.pmsuryaghar.gov.in/"],
    ["Government of India", "https://www.india.gov.in/"]
];

function showReferences() {
    const referencesHTML = references.map(function (reference) {
        return `
            <a class="card" href="${reference[1]}" target="_blank" rel="noopener noreferrer">
                ${reference[0]} ↗
            </a>
        `;
    }).join("");

    getElement("referenceCards").innerHTML = referencesHTML;
}

// ---------------------------------------------------------
// 13. Scroll effects and back-to-top button
// ---------------------------------------------------------
function updateNavigationOnScroll() {
    const backToTopButton = getElement("backToTop");
    const navigationLinks = document.querySelectorAll("#navLinks a");

    // Show the back-to-top button after the visitor scrolls down.
    backToTopButton.classList.toggle("visible", window.scrollY > 600);

    // Highlight the navigation link for the section currently on screen.
    // Read sections in their actual page order so the correct link is selected.
    let currentSection = "home";
    const pageSections = document.querySelectorAll("#home, main section");

    pageSections.forEach(function (section) {
        if (section.getBoundingClientRect().top < 140) {
            currentSection = section.id;
        }
    });

    navigationLinks.forEach(function (link) {
        const isCurrent = link.getAttribute("href") === `#${currentSection}`;
        link.classList.toggle("active", isCurrent);
    });
}

function setupScrollEffects() {
    window.addEventListener("scroll", updateNavigationOnScroll, { passive: true });

    getElement("backToTop").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Fade cards in as they enter the screen. Older browsers can skip this effect.
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(".reveal").forEach(function (card) {
            observer.observe(card);
        });
    } else {
        document.querySelectorAll(".reveal").forEach(function (card) {
            card.classList.add("visible");
        });
    }

    updateNavigationOnScroll();
}

// ---------------------------------------------------------
// 14. Start the website
// ---------------------------------------------------------
function startWebsite() {
    createNavigationLinks();
    showTeamMembers();
    createSolarStepButtons();
    createRenewableTabs();
    showGeneralCards();
    showInstallationSteps();
    setupSolarCalculator();
    showSolarResources();
    showFAQs();
    showReferences();
    setupScrollEffects();
}

// Run the setup after the HTML has loaded.
document.addEventListener("DOMContentLoaded", startWebsite);
