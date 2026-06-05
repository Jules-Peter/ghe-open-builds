var PROJECTS = [
  {
    id: 1, cat: "water", catLabel: "Water", catClass: "c-water",
    title: "Solar Pasteurizer (WAPI)",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Water_Pasteurization_Indicator.jpg",
    difficulty: 1, buildTime: "1–2 days", cost: "USD 2–5", output: "~1 L per cycle",
    toolsRequired: "Scissors, needle", developedBy: "CAWST / field-adapted",
    lead: "A simple, low-cost device that uses a small wax indicator to confirm when water has been safely pasteurized using solar heat. No fuel, no electricity, and no moving parts required.",
    howItWorks: [
      "The WAPI (Water Pasteurization Indicator) is a small plastic tube containing a food-grade wax with a melting point of 70 °C. The tube is suspended in the water container during solar heating. When the wax melts and floats to the top, the water has reached pasteurization temperature and is safe to drink — even without boiling.",
      "Solar pasteurization requires sustained temperatures above 65 °C for several minutes, which kills all major waterborne pathogens including bacteria, viruses, and protozoa. The WAPI provides a reliable visual indicator without any electronic components or specialist knowledge."
    ],
    materials: ["Small plastic tube (3–5 cm)", "Food-grade wax (beeswax or soy wax)", "Nylon fishing line (30 cm)", "Small nut or washer (weight)", "Cork or rubber stopper"],
    tools: ["Scissors or craft knife", "Small saucepan for wax melting", "Needle or thin wire", "Heat source (stove or fire)"],
    steps: ["Melt wax gently and pour into tube", "Insert fishing line while wax is still liquid", "Allow to cool and set completely", "Attach weight to lower end of fishing line", "Seal top with cork", "Test: place in boiling water — wax should melt and float up"]
  },
  {
    id: 2, cat: "water", catLabel: "Water", catClass: "c-water",
    title: "Rope Pump",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Demo_rope_pump_in_apeldoorn.jpg",
    difficulty: 2, buildTime: "2–3 days", cost: "USD 30–60", output: "Up to 15 m lift",
    toolsRequired: "Basic hand tools, drill", developedBy: "Fundación EMAS / adapted",
    lead: "Simple rope-and-washer pump for drawing water from shallow wells up to 15 m deep. Built from PVC pipe and locally available rope and rubber.",
    howItWorks: [
      "The rope pump operates by pulling a continuous loop of rope threaded through a vertical PVC pipe. Rubber or plastic washers knotted onto the rope at regular intervals push water up the pipe with each revolution. A simple axle and handle at the top drives the loop.",
      "The design has no valves and very few moving parts, making it easy to repair with basic tools. One person can lift 10–15 L per minute from a 10 m depth. The pump can be driven by hand or adapted for bicycle or donkey power."
    ],
    materials: ["PVC pipe, 50 mm diameter (well depth + 1 m)", "Nylon rope, 8–10 mm (2× well depth)", "Rubber washers or cut inner-tube discs (1 per 40 cm)", "Steel axle rod (50 cm)", "Wooden handle", "PVC end caps and fittings"],
    tools: ["Hacksaw or pipe cutter", "Drill with 10 mm bit", "Knife or scissors", "Tape measure", "Spanner"],
    steps: ["Cut PVC pipe to required length", "Drill hole through top end-cap for rope entry", "Knot washers onto rope at 40 cm intervals", "Thread rope through pipe and form continuous loop", "Mount axle and handle at well head", "Secure pipe vertically into well and test flow"]
  },
  {
    id: 3, cat: "water", catLabel: "Water", catClass: "c-water",
    title: "Slow Sand Filter",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/HydrAid%C2%AE_BioSand_Water_Filter.jpg",
    difficulty: 2, buildTime: "3–5 days", cost: "USD 20–50", output: "20–60 L per hour",
    toolsRequired: "Basic masonry or container work", developedBy: "CAWST BioSand design",
    lead: "Biological water filter using a layer of fine sand and a living bio-layer to remove pathogens. Effective for treating turbid surface water.",
    howItWorks: [
      "The slow sand filter passes water slowly through a deep bed of fine sand (60–80 cm). A biological layer — the schmutzdecke — forms naturally on the sand surface within 2–3 weeks. This layer of micro-organisms actively removes bacteria, protozoa, and turbidity as water passes through.",
      "The filter works by both physical straining and biological action. Flow rate must be kept slow (0.1–0.3 m/hr) for sufficient contact time. Regular maintenance involves carefully scraping the top 2 cm of sand when flow slows, then allowing the bio-layer to re-establish over 1–2 weeks."
    ],
    materials: ["Concrete blocks or large plastic container (200 L)", "Fine sand, well-washed (100–150 kg)", "Coarse gravel, washed (30–50 kg)", "PVC inlet pipe with diffuser plate", "PVC outlet pipe with U-trap"],
    tools: ["Shovel", "Buckets", "Trowel (for concrete builds)", "Drill for outlet holes", "Wire mesh"],
    steps: ["Build or prepare watertight container", "Install gravel drainage layer (10 cm) at base", "Add fine sand to 60–80 cm depth", "Install inlet diffuser to prevent surface disturbance", "Install outlet pipe at correct height to maintain water level above sand", "Wait 2–3 weeks for bio-layer before using filtered water"]
  },
  {
    id: 4, cat: "water", catLabel: "Water", catClass: "c-water",
    title: "SODIS Bottle Rack",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/SODIS_Solarer_Wasserdesinfektion.jpg",
    difficulty: 1, buildTime: "Half a day", cost: "USD 3–8", output: "6 L per day per rack",
    toolsRequired: "Basic hand tools", developedBy: "SANDEC / Eawag",
    lead: "Tilted rack that maximises sun exposure for solar disinfection of water in transparent PET bottles. Treats 6 litres per day per rack unit.",
    howItWorks: [
      "SODIS (Solar Water Disinfection) uses UV-A radiation and heat from sunlight to inactivate pathogens in clear PET bottles. The rack holds bottles at a 45° angle facing the sun. After 6 hours in full sun (or 2 days in cloudy conditions), the water is safe to drink.",
      "A reflective backing (aluminium foil or white-painted board) doubles UV exposure by reflecting light onto the underside of bottles. Only clear, unscratched PET bottles (recycling symbol 1) should be used. Fill with clear water — turbid water must be filtered first."
    ],
    materials: ["Timber slats or bamboo poles", "Wire or nails", "Aluminium foil or white-painted board (reflector)", "6× clear 1.5 L PET bottles"],
    tools: ["Saw", "Hammer and nails or wire pliers", "Tape measure"],
    steps: ["Cut timber to make angled frame at 45°", "Space bottle slots 5 cm apart across frame", "Attach reflective backing behind bottles", "Fill clean PET bottles with clear water", "Place in direct sunlight for minimum 6 hours", "Drink within 24 hours of treatment"]
  },
  {
    id: 5, cat: "water", catLabel: "Water", catClass: "c-water",
    title: "Ceramic Pot Filter",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ceramic_Pot_Filter.JPG",
    difficulty: 2, buildTime: "3–4 days", cost: "USD 10–25", output: "1–3 L per hour",
    toolsRequired: "Pottery skills or kiln access", developedBy: "Potters for Peace / RDIC",
    lead: "Clay pot water filter treated with colloidal silver. Removes bacteria, turbidity, and protozoa. Can be produced locally using basic pottery skills.",
    howItWorks: [
      "The filter is made from a mixture of local clay and a combustible material (rice husks or sawdust). When fired in a kiln, the combustible burns away leaving a porous ceramic that filters out bacteria, protozoa, and turbidity by physical straining.",
      "After firing, the pot is coated with colloidal silver solution which adds antibacterial action. The filter pot sits in a plastic or clay receiving vessel. Water poured into the top slowly drips through the ceramic into the lower vessel. Flow rate depends on clay quality and firing temperature."
    ],
    materials: ["Local clay (5 kg per filter)", "Rice husks or sawdust (1 part per 5 parts clay)", "Colloidal silver solution (5–10 mL)", "Receiving vessel (plastic bucket or clay pot)", "Lid"],
    tools: ["Potter's mould or press", "Kiln (wood-fired or electric)", "Paintbrush", "Bucket for mixing"],
    steps: ["Mix clay with combustible in correct ratio", "Form pot using press mould", "Dry slowly for 1–2 days to avoid cracking", "Fire in kiln at 900–1000 °C", "Apply colloidal silver solution and allow to dry", "Test flow rate: 1–3 L/hr is acceptable"]
  },
  {
    id: 6, cat: "water", catLabel: "Water", catClass: "c-water",
    title: "Simple Rain Gauge",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Rain-gauge,amedas-katori-chiba,japan.JPG",
    difficulty: 1, buildTime: "1 hour", cost: "USD 0–2", output: "Rainfall measurement",
    toolsRequired: "Permanent marker, ruler", developedBy: "Traditional design",
    lead: "Low-cost rain gauge made from a plastic bottle and ruler. Accurate enough for agricultural planning and local water resource monitoring.",
    howItWorks: [
      "A straight-sided plastic bottle or cylinder is marked with a millimetre scale and placed on a flat, open surface away from trees and buildings. After each rain event, the water depth is read from the scale and recorded.",
      "Rainfall records help farmers plan planting dates, estimate irrigation needs, and track seasonal patterns over years. The gauge should be read at the same time each day and emptied after recording."
    ],
    materials: ["Straight-sided plastic bottle (1–2 L)", "Permanent marker", "Ruler or printed millimetre scale", "Wooden stake or post (for mounting)", "Waterproof tape"],
    tools: ["Scissors or knife", "Spirit level"],
    steps: ["Cut bottle to give straight vertical sides", "Mark millimetre scale from base using ruler", "Mount level on post in open area, 30 cm above ground", "Read and record depth after each rain event", "Empty gauge immediately after reading", "Keep a written record with date and time"]
  },
  {
    id: 7, cat: "agriculture", catLabel: "Agriculture", catClass: "c-agri",
    title: "Origami Fencing",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Livestock_fence.jpg",
    difficulty: 1, buildTime: "1 day", cost: "USD 15–40 per panel", output: "Portable livestock / crop barrier",
    toolsRequired: "No tools required for assembly", developedBy: "GHE / ETH Zurich",
    lead: "Flat-pack steel panels that fold into rigid 3D fencing structures. Stores flat, installs quickly, no specialist tools needed. Protects crops and livestock.",
    howItWorks: [
      "Each panel is laser-cut or stamped from thin sheet steel with pre-scored fold lines. The flat panel is folded by hand along those lines to create a rigid corrugated 3D profile that is far stiffer than the flat sheet alone.",
      "Panels interlock at the edges and can be staked to the ground with wire pins. A standard fence line can be assembled or dismantled in under an hour. Because panels store flat, 50 metres of fencing fits in the back of a small vehicle — ideal for temporary crop protection or mobile livestock enclosures."
    ],
    materials: ["Pre-scored steel sheet panels (0.8–1.2 mm thick)", "Wire ground stakes (2 per panel)", "Connecting clips or wire loops"],
    tools: ["No tools required for assembly", "Wire cutters for ground stakes (preparation only)"],
    steps: ["Unfold flat panel along pre-scored fold lines", "Check all folds are crisp and panel is rigid", "Connect adjacent panels at overlap tabs", "Drive wire stakes through base holes into ground", "Inspect line for gaps and adjust as needed"]
  },
  {
    id: 8, cat: "agriculture", catLabel: "Agriculture", catClass: "c-agri",
    title: "Treadle Pump",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Treadle_pump_in_Bangladesh.jpg",
    difficulty: 2, buildTime: "3–5 days", cost: "USD 25–60", output: "1,500–3,000 L per hour",
    toolsRequired: "Basic carpentry and metalwork", developedBy: "IDE International",
    lead: "Foot-powered piston pump for small-scale irrigation. Draws water from shallow sources up to 7 m deep. No fuel cost — powered entirely by body weight.",
    howItWorks: [
      "The treadle pump uses two alternating foot-operated treadles to drive a double-acting piston pump. As the operator steps down on one side, water is drawn up on that side and simultaneously pushed out the discharge pipe on the other.",
      "The pump connects to a shallow well, pond, or stream via suction pipe. An experienced operator can irrigate 0.1–0.2 ha per day. The pump is most effective for lift heads of 3–7 m."
    ],
    materials: ["Bamboo or timber frame (2 m × 1 m)", "Two PVC or metal cylinders (75 mm diameter, 30 cm long)", "Rubber piston seals (cut from inner tube)", "Two leather or rubber foot valves", "PVC suction pipe (50 mm)", "Steel connecting rods and pivot pins"],
    tools: ["Saw", "Drill", "File or rasp", "Hammer", "Spanners", "Knife"],
    steps: ["Build A-frame support from timber or bamboo", "Mount two pump cylinders vertically side by side", "Fabricate pistons from rod and rubber seals", "Connect pistons to treadle arms with pivot pins", "Install foot valves at base of each cylinder", "Fit suction pipe into water source and prime before first use"]
  },
  {
    id: 9, cat: "agriculture", catLabel: "Agriculture", catClass: "c-agri",
    title: "Indirect Solar Crop Dryer",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Sonnendorrer_solar_food_dehydrator.JPG",
    difficulty: 2, buildTime: "3–4 days", cost: "USD 30–80", output: "5–15 kg dry product per batch",
    toolsRequired: "Basic carpentry", developedBy: "Practical Action design",
    lead: "Indirect solar dryer for fruits, vegetables, and grains. Reduces post-harvest losses by 40–60%. Heated air passes over the crop without direct sun exposure.",
    howItWorks: [
      "The indirect solar dryer separates the solar collector from the drying chamber. A glazed collector panel heats air, which then rises naturally into a dark drying cabinet where food sits on mesh trays. Because food is never in direct sunlight, vitamins and colour are better preserved than in open sun drying.",
      "A black-painted absorber plate inside the collector maximises heat gain. Natural convection drives airflow — no fan is needed. At 50–60 °C drying temperature, most fruits and vegetables dry in 1–3 days depending on moisture content."
    ],
    materials: ["Timber frame and plywood panels (1.2 m × 0.8 m)", "Clear polycarbonate or glass sheet (collector glazing)", "Black-painted sheet metal (absorber plate)", "Aluminium mesh or chicken wire (2–3 trays)", "Hinged door", "Black paint"],
    tools: ["Saw", "Drill", "Hammer and nails", "Paintbrush", "Tape measure", "Silicone sealant"],
    steps: ["Build angled collector box and paint absorber plate black", "Glaze collector with clear polycarbonate, sealed at edges", "Build insulated drying cabinet above collector outlet", "Install mesh trays at 15–20 cm spacing", "Cut ventilation holes (top and bottom) in drying chamber", "Test with thin-sliced tomato or mango on a sunny day"]
  },
  {
    id: 10, cat: "agriculture", catLabel: "Agriculture", catClass: "c-agri",
    title: "Evaporative Cooler (Zeer Pot)",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Tonkrugk%C3%BChler%2C_Clay_pot_cooler%2C_Canari_Frigo.JPG",
    difficulty: 1, buildTime: "1–2 hours", cost: "USD 2–10", output: "10–20 °C temperature reduction",
    toolsRequired: "None", developedBy: "Mohammed Bah Abba (traditional principle)",
    lead: "Pot-in-pot cooler using evaporation to keep produce fresh without electricity. Extends shelf life of vegetables by several days in dry climates.",
    howItWorks: [
      "The zeer pot places a small clay pot inside a larger clay pot with wet sand filling the gap. As water evaporates through the porous outer wall, it draws heat from the inner pot — cooling the interior by 10–20 °C depending on ambient humidity.",
      "The system works best in hot, dry climates. In humid climates, cooling is reduced. The sand must be kept moist by adding about 1 L of water per day. A wet cloth lid prevents evaporation from the top. Leafy vegetables that wilt in hours can stay fresh for several days."
    ],
    materials: ["Large clay pot (40–60 cm diameter)", "Small clay pot (25–35 cm diameter)", "Clean coarse sand (to fill the gap)", "Wet cloth for lid"],
    tools: ["None required"],
    steps: ["Place small pot inside large pot", "Fill the gap between pots with clean sand", "Pour water over sand until fully saturated", "Place produce inside inner pot", "Cover with wet cloth lid", "Add water to sand daily to maintain cooling"]
  },
  {
    id: 11, cat: "agriculture", catLabel: "Agriculture", catClass: "c-agri",
    title: "Manual Grain Thresher",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Step_type_thresher.JPG",
    difficulty: 2, buildTime: "2–3 days", cost: "USD 20–50", output: "50–80 kg grain per hour",
    toolsRequired: "Basic metalwork and carpentry", developedBy: "IRRI / adapted design",
    lead: "Hand-operated thresher for separating sorghum, maize, and wheat from stalks. 5–8× faster than hand-beating. Made from steel rod and locally sourced wood.",
    howItWorks: [
      "The thresher uses a rotating drum fitted with steel spikes that knock grain from stalks as the operator feeds them through. A hand-cranked flywheel maintains momentum. The drum spins inside a concave screen — grain passes through while straw is expelled at the side.",
      "Two operators work together — one cranking, one feeding stalks. The machine can be adapted for multiple crops by changing drum speed and the gap between drum and concave screen."
    ],
    materials: ["Steel channel or angle iron (frame)", "Steel rod 6–8 mm (drum spikes)", "Sheet metal (concave screen)", "Steel pipe (drum shaft)", "Hardwood crank handle", "Steel plate (flywheel)", "Two bush bearings"],
    tools: ["Angle grinder", "Welding equipment", "Drill", "File", "Tape measure"],
    steps: ["Weld steel frame to required dimensions", "Fabricate spike drum from rod and central shaft", "Weld concave screen to frame around drum", "Mount drum on bearings in frame", "Attach crank handle and flywheel to shaft", "Test with sample grain and adjust concave gap"]
  },
  {
    id: 12, cat: "agriculture", catLabel: "Agriculture", catClass: "c-agri",
    title: "Low-Cost Seedling Tray",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Seedbed_Lesotho.jpg",
    difficulty: 1, buildTime: "Half a day", cost: "USD 1–5", output: "50 seedlings per tray",
    toolsRequired: "Knife or scissors", developedBy: "Traditional / adapted",
    lead: "Seedling propagation tray made from recycled materials. Improves germination rate and simplifies transplanting. Designed for 50 seedlings per tray.",
    howItWorks: [
      "The tray provides individual cells for each seedling, preventing root tangling and transplant shock. Each cell is formed from folded banana leaf, newspaper, or cut plastic bottle, filled with a nursery mix of compost and soil.",
      "Seedlings grown in individual cells develop stronger root systems and transplant with their root ball intact — survival rates are significantly higher than bare-root transplanting. Biodegradable liners can be planted directly without removing the cell."
    ],
    materials: ["Banana leaves, folded newspaper, or cut plastic bottles (50 cells)", "Compost and soil mix (50:50)", "Wooden tray or frame to hold cells upright", "Twine or rubber bands to hold cell shapes"],
    tools: ["Knife or scissors"],
    steps: ["Fold or cut material into 5–8 cm deep cell shapes", "Arrange cells tightly in wooden frame", "Fill each cell with moist compost-soil mix", "Sow 1–2 seeds per cell at correct depth", "Water gently and place in partial shade initially", "Thin to one seedling per cell once germinated"]
  },
  {
    id: 13, cat: "waste", catLabel: "Waste & Sanitation", catClass: "c-waste",
    title: "Vermicompost Bin",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Eisenia_fetida_on_compost_bin.jpg",
    difficulty: 1, buildTime: "1 day", cost: "USD 5–15", output: "1–2 kg compost per week",
    toolsRequired: "Drill or nail punch", developedBy: "Traditional design",
    lead: "Worm-based composting system made from local materials. Converts kitchen and organic waste into high-quality fertiliser. Odour-free when managed correctly.",
    howItWorks: [
      "Vermicomposting uses red worms (Eisenia fetida) to break down organic waste. Worms consume food scraps, paper, and plant matter, producing worm castings — a nutrient-rich fertiliser with excellent soil structure benefits.",
      "The bin needs air holes for oxygen but must retain moisture. Worms work best at 15–25 °C. Fruit and vegetable scraps, coffee grounds, and cardboard are ideal inputs. Avoid meat, dairy, and oily foods. Castings are ready to harvest in 2–3 months."
    ],
    materials: ["Plastic bin or wooden box (50–100 L)", "Shredded newspaper or dry leaves (bedding)", "500 g–1 kg red worms", "Food scraps (fruit and vegetables)", "Old cloth or hessian sack (lid)"],
    tools: ["Drill or nail punch for air holes"],
    steps: ["Drill air holes in lid and sides of bin", "Add 10 cm damp bedding (shredded paper)", "Introduce worms onto bedding", "Bury food scraps under bedding on one side", "Keep moist but not waterlogged — squeeze test", "Harvest castings from bottom after 2–3 months"]
  },
  {
    id: 14, cat: "waste", catLabel: "Waste & Sanitation", catClass: "c-waste",
    title: "Ventilated Improved Pit Latrine",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/A_public_VIP_latrine_(photo_taken_in_2011)_(5529288476).jpg",
    difficulty: 2, buildTime: "4–7 days", cost: "USD 80–200", output: "Serves 5–10 people",
    toolsRequired: "Masonry and carpentry", developedBy: "WHO / WEDC standard design",
    lead: "Superstructure and ventilation design for a VIP latrine. The vent pipe removes odours and traps flies, significantly improving safety and user experience.",
    howItWorks: [
      "The VIP (Ventilated Improved Pit) latrine adds a vertical vent pipe on the sunny side of the superstructure. Air flows down the squat hole into the pit and up the vent pipe — carrying odours away from the user. Flies attracted to the bright vent opening are trapped by a fly screen at the top.",
      "The superstructure is kept dark inside so any flies emerging from the pit move toward the bright vent rather than the squat hole. When the pit is two-thirds full, the structure is moved and the pit sealed to decompose."
    ],
    materials: ["Concrete blocks or bricks (superstructure)", "Reinforced concrete slab with squat hole", "PVC or bamboo vent pipe (150 mm diameter, 500 mm above roof)", "Fly screen mesh (vent pipe top)", "Timber and corrugated iron (roof)", "Concrete rings or brick (pit lining)"],
    tools: ["Trowel", "Spirit level", "Saw", "Drill", "Tape measure"],
    steps: ["Excavate pit (1.5–2 m deep, 1–1.5 m diameter)", "Line pit walls with brickwork or concrete rings", "Cast reinforced concrete slab with off-centre squat hole", "Build dark superstructure with no windows", "Install vent pipe on sun-facing wall", "Fix fly screen to vent pipe top and test for odour flow"]
  },
  {
    id: 15, cat: "waste", catLabel: "Waste & Sanitation", catClass: "c-waste",
    title: "Urine-Diverting Dry Toilet",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Urine_diverting_dehydration_toilet_(UDDT)_(3019330180).jpg",
    difficulty: 3, buildTime: "5–10 days", cost: "USD 150–400", output: "Serves 4–6 people",
    toolsRequired: "Masonry, plumbing, carpentry", developedBy: "EcoSanRes / GTZ design",
    lead: "Separates urine from faeces at source for safer, lower-volume handling. Stored urine can be used directly as fertiliser after a short storage period.",
    howItWorks: [
      "The UDDT uses a specially shaped toilet seat: a front cup collects urine and channels it to a separate storage container, while a rear opening allows faeces to fall into a dehydrating vault. Ash or dry soil is added after each use to aid dehydration and suppress odours and flies.",
      "Faeces dehydrate rapidly in the vault (6–12 months), reducing in volume by 75% into a dry, safe material. Urine is stored for a minimum of 1 month before use as liquid fertiliser. Two vaults are built so one can rest while the other fills."
    ],
    materials: ["Concrete blocks (superstructure)", "UDDT toilet seat (moulded plastic or concrete)", "Two dehydrating vaults (1 m³ each)", "Urine pipe and 20 L storage container", "Ash or dry soil for covering", "Concrete slab and roof"],
    tools: ["Trowel", "Spirit level", "Pipe cutter", "Drill", "Saw"],
    steps: ["Excavate and cast two concrete vaults (1 m³ each)", "Build superstructure with access hatch at vault level", "Install UDDT seat aligned over active vault", "Connect urine outlet to sealed container outside", "Build roof and ensure vault is fly-proof", "Add 250 mL ash or dry soil after every use"]
  },
  {
    id: 16, cat: "waste", catLabel: "Waste & Sanitation", catClass: "c-waste",
    title: "Biochar Kiln (TLUD)",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/TLUD_22_consuming_charcoal.JPG",
    difficulty: 2, buildTime: "2–3 days", cost: "USD 15–40", output: "3–5 kg biochar per batch",
    toolsRequired: "Basic metalwork", developedBy: "Aprovecho Research / TLUD design",
    lead: "Top-lit updraft kiln for producing biochar from agricultural waste. Biochar improves soil water retention and fertility when mixed into fields.",
    howItWorks: [
      "The TLUD (Top-Lit Updraft) kiln produces biochar through pyrolysis — heating biomass in a low-oxygen environment. Biomass is packed into the drum and lit from the top. The fire burns downward while combustible gases rise and burn off cleanly at the top.",
      "The kiln cuts off air supply when the fire front reaches the bottom, leaving charred biochar rather than ash. The biochar is immediately quenched with water. Added to soil at 2–5% by volume, biochar improves water retention, supports soil microbes, and sequesters carbon for centuries."
    ],
    materials: ["Steel drum (200 L) with lid", "Steel pipe (50 mm, 30 cm — primary air inlet)", "Steel mesh (secondary air ports)", "Steel grating (platform inside drum)", "Angle grinder cut-outs for air ports"],
    tools: ["Angle grinder", "Drill", "Metal punch", "Safety gloves and goggles"],
    steps: ["Cut primary air inlet hole in drum base and fit pipe", "Drill secondary air holes around drum sides at mid-height", "Place steel grating 5 cm above base", "Pack dry biomass tightly into drum (rice husks, wood chips)", "Light top surface with paper or dry grass", "Seal drum when flame burns cleanly; quench biochar with water after 30–60 minutes"]
  },
  {
    id: 17, cat: "waste", catLabel: "Waste & Sanitation", catClass: "c-waste",
    title: "Three-Bin Waste Sorting Station",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Recycling_bins_Remondis.jpg",
    difficulty: 1, buildTime: "1 day", cost: "USD 10–30", output: "Household or community use",
    toolsRequired: "Basic carpentry", developedBy: "GHE community design",
    lead: "Three-compartment sorting station for organic, dry recyclable, and residual waste. Colour-coded with pictogram labels for easy use by all household members.",
    howItWorks: [
      "The station separates waste into three streams at the point of generation: green for organic waste (food scraps, garden waste), yellow for dry recyclables (plastic, paper, metal), and grey for residual waste.",
      "Organic waste feeds directly into a compost or vermicompost system. Dry recyclables are collected for sale or recycling. Separating at source significantly reduces the volume of waste going to landfill and makes composting cleaner."
    ],
    materials: ["Three plastic buckets or wooden boxes (20–30 L each)", "Timber frame", "Paint (green, yellow, grey)", "Pictogram labels (printed or hand-painted)", "Lids for each bin"],
    tools: ["Saw", "Drill", "Paintbrush"],
    steps: ["Build timber frame to hold three containers at convenient height", "Paint containers in category colours", "Attach pictogram labels showing accepted waste types", "Position in high-traffic household area", "Empty organic bin daily into compost", "Collect recyclables weekly for sale or collection point"]
  },
  {
    id: 18, cat: "waste", catLabel: "Waste & Sanitation", catClass: "c-waste",
    title: "Fecal Sludge Transport Container",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fecal_sludge_management_(FSM)_emptying_with_a_gulper_(10716017446).jpg",
    difficulty: 2, buildTime: "2–3 days", cost: "USD 25–60", output: "50–100 L per container",
    toolsRequired: "Basic fabrication", developedBy: "WSUP / Gulper design",
    lead: "Stackable, sealable container for transporting fecal sludge from pit latrines to treatment sites. Designed to minimise leaks and exposure during manual emptying.",
    howItWorks: [
      "The container is a sealed HDPE drum (50–100 L) with a gasketed lid and robust handles. A piston or gulper pump draws sludge from the pit into the container, which is then transported by handcart or bicycle trailer to a treatment or disposal site.",
      "Key features are leak-proof seals, easy-clean interior surfaces, and stackability. A breather valve prevents pressure build-up from gas. The design allows safe, hygienic emptying of pit latrines without a mechanised vacuum truck."
    ],
    materials: ["HDPE drum with lid (50 L)", "Rubber gasket seal", "Two steel handles (welded or bolted)", "Breather valve (tyre valve stem)", "Gulper hand pump (PVC pipe with rubber flap valve)"],
    tools: ["Drill", "Wrench", "Hacksaw"],
    steps: ["Drill handle mounting holes and fit steel handles", "Install breather valve in lid", "Check gasket seal — pressurize briefly to test", "Fabricate gulper pump from PVC pipe and rubber flap valve", "Test pump suction and container seal with water", "Mark containers clearly as fecal sludge"]
  },
  {
    id: 19, cat: "mushroom", catLabel: "Mushroom Farming", catClass: "c-mushroom",
    title: "Mushroom Substrate Mixer",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Oyster_mushroom1.JPG",
    difficulty: 2, buildTime: "3–5 days", cost: "USD 40–100", output: "50–100 kg substrate per hour",
    toolsRequired: "Basic metalwork and carpentry", developedBy: "GHE / ETH Zurich",
    lead: "Low-cost paddle mixer for preparing mushroom growing substrate. Ensures even hydration and mixing of supplements. Reduces manual labour for medium-scale operations.",
    howItWorks: [
      "The mixer uses a horizontal rotating shaft fitted with paddle blades inside a trough. As the shaft turns, paddles fold and turn substrate material (straw, sawdust, or cotton husks) while water and supplements are added through a spray bar above.",
      "Even mixing ensures uniform moisture content (65–70%) across the batch — a critical factor for mushroom yield. The trough can be fabricated from sheet metal or timber lined with plastic sheeting."
    ],
    materials: ["Steel channel or timber trough (1.5 m × 0.4 m × 0.3 m)", "Steel shaft (30 mm diameter)", "Steel plate paddle blades (8–12)", "Two bearings", "Hand crank or belt-drive pulley", "Perforated PVC spray pipe (1.5 m)"],
    tools: ["Welding equipment", "Angle grinder", "Drill", "Spanner"],
    steps: ["Fabricate trough from sheet metal or timber", "Weld paddles onto central shaft at alternating angles", "Mount shaft in bearings at each end of trough", "Attach crank handle to one shaft end", "Install perforated spray pipe above trough", "Test with dry substrate before adding water"]
  },
  {
    id: 20, cat: "mushroom", catLabel: "Mushroom Farming", catClass: "c-mushroom",
    title: "Pasteurization Drum",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/DIY_anaerobic_digester.JPG",
    difficulty: 1, buildTime: "1–2 days", cost: "USD 20–50", output: "40–50 kg substrate per batch",
    toolsRequired: "Basic metalwork", developedBy: "Practical Action / adapted",
    lead: "Steam pasteurization unit using a 200 L drum and wood-fired stove. Treats up to 50 kg of substrate per batch. Simple construction from widely available materials.",
    howItWorks: [
      "Substrate sacks are stacked inside the drum above a water reservoir. The drum is sealed and heated over a wood fire. Steam from the boiling water pasteurizes the substrate at 80–100 °C for 1–2 hours, killing competitor moulds and bacteria.",
      "After pasteurization, the drum cools to below 30 °C before inoculation with spawn. Cooling inside the sealed drum prevents recontamination."
    ],
    materials: ["Steel drum (200 L) with tight-fitting lid", "Steel grating (raised platform, 15 cm above base)", "Bricks or steel frame (stand over fire)", "Substrate sacks (hessian or polypropylene)", "Thermometer (0–120 °C)"],
    tools: ["Angle grinder or punch (air vent)", "Pliers"],
    steps: ["Place steel grating 15 cm above drum base", "Add 10–15 L water below grating", "Fill substrate sacks and stack on grating", "Seal lid with cloth strip to reduce steam loss", "Heat over wood fire — maintain steam for 1–2 hours", "Cool completely below 30 °C before opening to inoculate"]
  },
  {
    id: 21, cat: "mushroom", catLabel: "Mushroom Farming", catClass: "c-mushroom",
    title: "Tiered Growing Shelf",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Pleurotus_ostreatus_3.jpg",
    difficulty: 1, buildTime: "1–2 days", cost: "USD 15–40", output: "60 growing bags per unit",
    toolsRequired: "Basic carpentry", developedBy: "GHE / ETH Zurich",
    lead: "Space-efficient tiered shelf for hanging mushroom growing bags. Made from bamboo or timber. Holds up to 60 bags per unit in a 2 m² footprint.",
    howItWorks: [
      "The shelf has three or four tiers of horizontal poles from which mushroom bags hang on wire hooks. Hanging bags rather than stacking them maximises air circulation around each bag, which is essential for fruiting.",
      "Bamboo is preferred for its strength and local availability. The structure can be dismantled for cleaning between growing cycles."
    ],
    materials: ["Bamboo poles or timber (4× uprights 2 m, 8× horizontal poles 1 m)", "Lashing rope or nails", "Steel wire hooks (60 per unit)", "Ceiling hooks or wall brackets"],
    tools: ["Saw", "Hammer or lashing cord"],
    steps: ["Cut uprights and horizontal poles to length", "Lash or nail horizontal poles to uprights at 40 cm intervals", "Brace structure diagonally for stability", "Bend wire hooks and hang on horizontal poles", "Hang inoculated bags from hooks at 10 cm spacing", "Mist twice daily to maintain 80–90% humidity"]
  },
  {
    id: 22, cat: "mushroom", catLabel: "Mushroom Farming", catClass: "c-mushroom",
    title: "Simple Inoculation Workbench",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/FZU_Glovebox_PJachimova_5.jpg",
    difficulty: 2, buildTime: "2–3 days", cost: "USD 20–60", output: "Reduces contamination rate",
    toolsRequired: "Basic carpentry", developedBy: "GHE / ETH Zurich",
    lead: "Low-tech inoculation station that reduces contamination during spawn transfer. Uses a glove box design with UV light sterilisation.",
    howItWorks: [
      "The workbench is a sealed box with two arm holes fitted with long rubber gloves. All interior surfaces are sterilised before use with a UV lamp or 70% alcohol spray. Substrate bags and spawn are passed through a small side hatch without exposing materials to unfiltered air.",
      "A 15 W UV lamp mounted inside kills surface microbes. Although not a true laminar flow hood, this design reduces contamination rates significantly in small-scale production settings."
    ],
    materials: ["Plywood 12 mm (box frame, 80 cm × 50 cm × 40 cm)", "Two long-arm rubber household gloves", "UV lamp (15 W, 254 nm)", "Small hatch with magnetic seal", "Reflective white interior paint", "Power cable and switch"],
    tools: ["Saw", "Drill", "Screwdriver", "Silicone sealant"],
    steps: ["Build sealed plywood box with no gaps", "Cut two arm holes (200 mm diameter) in front face", "Seal gloves into arm holes with waterproof tape", "Mount UV lamp inside on ceiling", "Cut small side hatch with magnetic closure for material entry", "Run UV for 20 minutes and wipe interior with 70% alcohol before each session"]
  },
  {
    id: 23, cat: "mushroom", catLabel: "Mushroom Farming", catClass: "c-mushroom",
    title: "Low-Cost Humidity Tent",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Plastic_greenhouse.jpg",
    difficulty: 1, buildTime: "Half a day", cost: "USD 10–25", output: "Maintains 80–95% RH",
    toolsRequired: "Basic hand tools", developedBy: "GHE / adapted design",
    lead: "Plastic-sheeting tent that maintains high humidity for mushroom fruiting. Includes a manual misting system from a garden sprayer and PVC pipe manifold.",
    howItWorks: [
      "The tent creates a micro-climate of 80–95% relative humidity required for oyster mushroom fruiting. A bamboo or PVC pipe frame is covered with clear or white poly sheeting. Ventilation slots at the base allow CO₂ to escape while retaining moisture.",
      "A garden knapsack sprayer connected to a PVC manifold with drilled holes delivers a fine mist twice a day. The mist wets the inside walls and floor rather than the bags directly, raising humidity without waterlogging the substrate."
    ],
    materials: ["Bamboo poles or PVC pipe (frame, 2 m × 2 m × 2 m)", "Clear polyethylene sheeting (4 m × 6 m)", "PVC pipe manifold with drilled holes (misting bar)", "Garden knapsack sprayer (10 L)", "Pegs or clips to secure sheeting"],
    tools: ["Drill (for manifold holes)", "Knife", "Cable ties"],
    steps: ["Erect bamboo or PVC frame inside growing area", "Drape poly sheeting over frame, leaving 10 cm gap at base for ventilation", "Install misting pipe along top of frame interior", "Connect manifold to garden sprayer via hose fitting", "Hang growing bags inside tent on shelf system", "Mist twice daily: morning and evening, until water runs down walls"]
  },
  {
    id: 24, cat: "mushroom", catLabel: "Mushroom Farming", catClass: "c-mushroom",
    title: "Harvest & Transport Trolley",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Wheelbarrow_Billy_Cart.jpg",
    difficulty: 2, buildTime: "2–3 days", cost: "USD 30–70", output: "20 kg capacity",
    toolsRequired: "Basic metalwork", developedBy: "GHE / ETH Zurich",
    lead: "Wheeled cart for collecting and weighing mushroom harvests. Holds 20 kg, built from angle iron and bicycle wheels. Includes a hook bar for weighing bags.",
    howItWorks: [
      "The trolley uses a flat steel frame mounted on two bicycle wheels and a front castor. A horizontal bar at handle height carries an S-hook for a spring balance, allowing bags to be weighed immediately at harvest.",
      "The low platform height (30 cm) makes loading heavy bags easy. The bicycle wheel axle handles good loads on uneven floors. The frame is welded from 30 mm angle iron and can be built by any local welder in half a day."
    ],
    materials: ["Angle iron 30 × 30 × 3 mm (8 m total)", "Two bicycle wheels and axle", "Front castor wheel", "Steel tube handle (1 m)", "S-hook and 50 kg spring balance", "Flat steel plate (platform)"],
    tools: ["Welding equipment", "Angle grinder", "Drill", "Tape measure"],
    steps: ["Weld rectangular platform frame (80 × 50 cm)", "Weld axle mounts and fit bicycle wheels", "Fit front castor with swivel bracket", "Weld vertical handle posts and horizontal grip bar", "Weld horizontal weighing bar above handle level", "Grind welds smooth and apply anti-rust primer"]
  },
  {
    id: 25, cat: "biogas", catLabel: "Biogas", catClass: "c-biogas",
    title: "Fixed-Dome Biogas Digester",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Construction_of_fixed-dome_biogas_plant_near_Hanoi_(3282051499).jpg",
    difficulty: 3, buildTime: "1–2 weeks", cost: "USD 300–800", output: "1–3 m³ gas per day",
    toolsRequired: "Masonry, excavation", developedBy: "Chinese / DEENBANDHU design",
    lead: "Underground fixed-dome digester for household biogas production. Runs on animal manure or food waste. Provides cooking gas and nutrient-rich digestate.",
    howItWorks: [
      "The fixed-dome digester is a hemispherical underground tank built from brick and concrete. Animal manure mixed with water flows in through the inlet pipe. Anaerobic bacteria break down the organic matter, producing biogas (60–70% methane) which accumulates in the dome.",
      "Gas pressure pushes digestate into an overflow tank. When the gas outlet valve is opened for cooking, pressure drops and slurry flows back in from the overflow. Digestate from the overflow tank is a rich liquid fertiliser."
    ],
    materials: ["Bricks (2,000–4,000)", "Cement and sand", "PVC inlet pipe (100 mm)", "Outlet pipe and overflow tank", "Gas outlet pipe with valve", "Gas-proof render and plaster"],
    tools: ["Spade and pick (excavation)", "Trowel", "Spirit level", "Plumb line", "Formwork for dome"],
    steps: ["Excavate pit to required diameter and depth", "Cast reinforced concrete base and inlet channel", "Build brick dome using formwork in concentric rings", "Plaster interior with 3 coats of render for gas-tightness", "Build overflow tank and connect outlet pipe", "Test with water before first loading with manure slurry"]
  },
  {
    id: 26, cat: "biogas", catLabel: "Biogas", catClass: "c-biogas",
    title: "Flexible Bag Digester",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Bag_digester_-_1_(4644386440).jpg",
    difficulty: 2, buildTime: "2–4 days", cost: "USD 60–150", output: "0.5–1.5 m³ gas per day",
    toolsRequired: "Basic tools and trenching", developedBy: "CIPAV / adapted design",
    lead: "Low-cost polyethylene tubular digester laid in a trench. Simpler and cheaper than a fixed-dome design. Produces gas within 2–4 weeks of loading.",
    howItWorks: [
      "A polyethylene tube (200–500 L) is laid in a protective trench. Manure slurry enters one end and gas-free digestate exits the other. Biogas accumulates in the upper part of the bag and is drawn off through a T-fitting at the highest point.",
      "The polyethylene bag is protected from UV and physical damage by the trench. Gas flow is regulated by a simple water-seal pressure gauge. The bag can be made from UV-stabilised greenhouse film folded and welded at the seams."
    ],
    materials: ["UV-stabilised polyethylene tube or film (200–500 L, 0.8 mm thick)", "PVC inlet and outlet pipes (50 mm)", "Pipe clamps and sealant", "T-fitting and hose for gas outlet", "Water-column manometer", "Bricks or stones (trench lining)"],
    tools: ["Spade (trench)", "Pipe cutter", "Clamps", "Plastic welding iron (optional)"],
    steps: ["Dig protective trench (30 cm deep)", "Line trench sides with bricks or boards", "Insert inlet and outlet pipes through bag ends and clamp", "Lay bag in trench and attach gas outlet T-fitting", "Fill with manure slurry (1:1 with water)", "Connect gas hose and test pressure gauge — first gas in 2–4 weeks"]
  },
  {
    id: 27, cat: "biogas", catLabel: "Biogas", catClass: "c-biogas",
    title: "Biogas Cooking Stove",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Naivasha_Biogas_cooking_(4426405467).jpg",
    difficulty: 1, buildTime: "1 day", cost: "USD 10–30", output: "2-burner household stove",
    toolsRequired: "Basic plumbing", developedBy: "Practical Action / adapted",
    lead: "2-burner cooking stove adapted for low-pressure biogas. Replaces wood fuel for household cooking. Reduces cooking time and indoor air pollution.",
    howItWorks: [
      "A biogas stove uses the same principle as an LPG stove but with a larger jet orifice (1.0–1.2 mm) to accommodate biogas, which has lower energy density than LPG. The stove connects to the digester gas pipe via a flexible hose and tap.",
      "The burner head mixes biogas with primary air before ignition. Flame colour should be blue — a yellow flame indicates too little air and can be corrected by opening the air shutter. A household digester producing 1 m³/day can fuel about 2 hours of cooking per day."
    ],
    materials: ["Cast iron or steel burner heads (2)", "Steel or concrete stove body", "Flexible gas hose (1 m)", "Brass tap valve", "Jet nozzle with 1.0 mm orifice", "Air shutter plate"],
    tools: ["Drill with 1.0 mm bit (for jet)", "Spanner", "Soapy water (leak test)"],
    steps: ["Connect burner heads to stove body", "Drill jet orifice to 1.0–1.2 mm diameter", "Connect gas inlet with flexible hose and tap", "Test all connections with soapy water for leaks", "Light stove and check for blue flame — adjust air shutter if needed", "Always close tap valve when not in use"]
  },
  {
    id: 28, cat: "biogas", catLabel: "Biogas", catClass: "c-biogas",
    title: "Biogas Pressure Gauge",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Biogas_pipes.JPG",
    difficulty: 1, buildTime: "1–2 hours", cost: "USD 1–3", output: "Monitors 0–30 cm water column",
    toolsRequired: "Drill, knife", developedBy: "Traditional manometer design",
    lead: "Water-column manometer for monitoring biogas pressure in household digesters. Made from clear plastic tubing. Costs under USD 2 in materials.",
    howItWorks: [
      "The manometer is a U-shaped clear plastic tube filled with coloured water. One end is open to the atmosphere; the other connects to the biogas pipe. Gas pressure pushes the water down on the gas side and up on the open side — the height difference in centimetres equals the pressure (1 cm = ~100 Pa).",
      "Normal operating pressure is 5–20 cm water column. Pressure above 30 cm indicates a blocked outlet. Zero pressure means insufficient gas production or a leak. The tube is mounted on a board with a centimetre scale."
    ],
    materials: ["Clear plastic tubing (6–8 mm ID, 60 cm)", "Wooden board (30 cm × 10 cm)", "Food colouring", "T-fitting (to tap into gas pipe)", "Staples or clips"],
    tools: ["Drill", "Knife", "Marker pen"],
    steps: ["Bend clear tubing into U-shape and clip to board", "Mark centimetre scale on board from base of U upwards", "Fill tube halfway with coloured water", "Connect one arm to biogas pipe via T-fitting", "Leave other arm open to air", "Read pressure difference between the two water levels"]
  },
  {
    id: 29, cat: "biogas", catLabel: "Biogas", catClass: "c-biogas",
    title: "Manual Slurry Agitator",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Biogas_plant_sketch.jpg",
    difficulty: 2, buildTime: "2–3 days", cost: "USD 20–50", output: "Up to 25% more gas yield",
    toolsRequired: "Basic metalwork", developedBy: "Practical Action / adapted",
    lead: "Hand-cranked paddle agitator for mixing slurry inside a biogas digester. Prevents scum layer formation and improves gas yield by up to 25%.",
    howItWorks: [
      "A floating scum layer of straw or grass can block gas release and reduce digester performance. The agitator breaks it up by rotating paddle blades through the slurry via a sealed shaft passing through the digester lid.",
      "The shaft passes through a gas-tight seal in the inlet pipe cover. Agitating for 5–10 minutes daily prevents scum build-up and keeps fresh substrate in contact with active bacteria, improving gas yield by 20–25%."
    ],
    materials: ["Steel pipe (25 mm, digester depth + 30 cm)", "Steel plate paddles (4, welded to pipe base)", "Rubber or rope gas-tight seal (around shaft)", "Hand crank (welded to top of shaft)"],
    tools: ["Welding equipment", "Angle grinder", "Drill"],
    steps: ["Weld four paddle blades to pipe bottom at 90° intervals", "Pass shaft through seal in inlet pipe cover", "Weld hand crank to top of shaft", "Check seal for gas tightness with soapy water", "Agitate 5–10 minutes each morning before first cooking", "Remove and clean paddles every 6 months"]
  },
  {
    id: 30, cat: "biogas", catLabel: "Biogas", catClass: "c-biogas",
    title: "Flexible Gas Storage Bag",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Biogasholder_and_flare.JPG",
    difficulty: 1, buildTime: "Half a day", cost: "USD 15–40", output: "100–500 L storage capacity",
    toolsRequired: "Heat sealer or clamps", developedBy: "SNV / adapted design",
    lead: "Low-cost flexible polyethylene storage bag for buffering biogas supply. Compensates for variable production throughout the day.",
    howItWorks: [
      "The flexible bag inflates as gas from the digester fills it. When the cooking stove draws gas, the bag deflates. This buffer makes gas available on demand even when the digester is producing slowly.",
      "The bag is fabricated by heat-sealing two sheets of UV-stabilised polyethylene. A single pipe fitting connects it to the gas line. The bag sits in a protective wire frame to prevent puncture and must be kept in a ventilated space away from open flames."
    ],
    materials: ["UV-stabilised polyethylene film (0.8 mm, 2 m × 1.5 m × 2 sheets)", "PVC pipe fitting (25 mm)", "Pipe clamp and sealant", "Wooden or wire protective frame"],
    tools: ["Heat sealer (or hot iron on metal strip)", "Pipe cutter", "Drill"],
    steps: ["Cut two polyethylene sheets to same size (2 m × 1.5 m)", "Heat-seal three edges together to form bag", "Insert PVC pipe fitting in fourth edge before sealing — clamp and seal tightly", "Test for leaks by inflating with air and applying soapy water", "Build protective frame around bag", "Connect to gas line and locate in ventilated, shaded spot away from flames"]
  }
];
