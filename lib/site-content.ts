export type Vehicle = {
  title: string
  body: string
  image: string
  alt: string
}

export type Faq = {
  question: string
  answer: string
}

export type WhyChooseItem = {
  title: string
  body: string
}

export type LocalRelevanceBlock = {
  title: string
  body: string
}

export type ServicePageContent = {
  metadata: {
    title: string
    description: string
  }
  currentLocationName?: string
  heroImage: string
  heroAlt: string
  heroTitle: string
  heroDescription: string
  heroSecondaryActionLabel?: string
  inventorySectionId?: string
  mainServiceKicker?: string
  mainServiceTitle: string
  mainServiceDescription: string
  mainVehicles: Vehicle[]
  mainVehicleAction: boolean
  whyChooseKicker?: string
  whyChooseTitle: string
  whyChooseDescription: string
  whyChooseItems: WhyChooseItem[]
  additionalServicesKicker?: string
  additionalServicesTitle?: string
  additionalServicesDescription?: string
  additionalVehicles?: Vehicle[]
  featureCtaTitle: string
  featureCtaDescription: string
  serviceAreasKicker?: string
  serviceAreasTitle?: string
  serviceAreasDescription?: string
  localRelevanceKicker?: string
  localRelevanceTitle: string
  localRelevanceDescription: string
  localRelevanceBlocks: LocalRelevanceBlock[]
  bottomCtaTitle: string
  bottomCtaDescription: string
  faqKicker?: string
  faqTitle?: string
  faqs: Faq[]
}

type VehicleText = {
  body: string
  alt: string
}

type WhyChooseText = {
  title: string
  body: string
}

type LocalBlockText = {
  title: string
  body: string
}

type FaqText = {
  question: string
  answer: string
}

type ContentTokenSet = {
  metadata: {
    title: string
    description: string
  }
  heroImage: string
  heroAlt: string
  heroTitle: string
  heroDescription: string
  heroSecondaryActionLabel: string
  mainServiceKicker: string
  mainServiceTitle: string
  mainServiceDescription: string
  mainVehicles: VehicleText[]
  whyChooseKicker: string
  whyChooseTitle: string
  whyChooseDescription: string
  whyChooseItems: WhyChooseText[]
  additionalServicesKicker?: string
  additionalServicesTitle?: string
  additionalServicesDescription?: string
  additionalVehicles?: VehicleText[]
  featureCtaTitle: string
  featureCtaDescription: string
  serviceAreasKicker: string
  serviceAreasTitle: string
  serviceAreasDescription: string
  localRelevanceKicker: string
  localRelevanceTitle: string
  localRelevanceDescription: string
  localRelevanceBlocks: LocalBlockText[]
  bottomCtaTitle: string
  bottomCtaDescription: string
  faqKicker: string
  faqTitle: string
  faqs: FaqText[]
}

export type ServiceSlug =
  | "compact-car"
  | "van-hire"
  | "truck-hire"
  | "minibus-hire"

function isTemplateToken(value: string) {
  return value.startsWith("{{") && value.endsWith("}}")
}

const compactCarMainImages = [
  "/compact-car/Fiat500.png",
  "/compact-car/Hyundai-i10Auto.png",
  "/compact-car/VWGolf.png",
  "/compact-car/FocusAuto.png",
] as const

const compactCarAdditionalImages = [
  "/compact-car/FocusEstate.png",
  "/compact-car/Mondeo.png",
  "/compact-car/MondeoAuto.png",
  "/compact-car/MondeoEstate.png",
  "/compact-car/RAV4Auto.png",
  "/compact-car/CClassAuto.png",
  "/compact-car/EClassAuto.png",
  "/compact-car/RangeRover.png",
] as const

const vanMainImages = [
  "/van/CaddyVan.png",
  "/van/FordTransitSWB.png",
  "/van/VWTransporterAutomatic.png",
  "/van/FordTransitMWB.png",
  "/van/FordTransitLWB.png",
  "/van/4MTRSprinter.png",
  "/van/FordLutonBoxTailLift.png",
  "/van/FordTransitDropsideVan.png",
  "/van/3.5TonneTipperTransit.png",
  "/van/RecoveryVanTruck.png",
  "/van/VWCampervan.png",
  "/van/12.5MCherryPicker3.5T.png",
] as const

const minibusMainImages = [
  "/minibus/VauxhallZafira5plus2.png",
  "/minibus/Galaxy7SeaterManual.png",
  "/minibus/Galaxy7SeaterAutomatic.png",
  "/minibus/9SeaterManual.png",
  "/minibus/9SeaterAutomatic.png",
  "/minibus/FordMinibus12Seater.png",
  "/minibus/FordMinibus15Seater.png",
  "/minibus/FordMinibusLITE 17Seater(no D1).png",
  "/minibus/FordMinibus17Seater.png",
] as const

const truckMainImages = [
  "/truck/FordLuton3.5TonTailBoxLiftTruck.png",
  "/truck/3.5TonneTipperTransitTruck.png",
  "/truck/3.5TonneRecoveryTruck.png",
  "/truck/7.5TonneBoxTruckWithTailLift.png",
  "/truck/7.5TonneCurtainSideTruck.png",
  "/truck/7.5TonneDropsideTruck.png",
  "/truck/7.5TonneTipperTruck.png",
  "/truck/7.5TonneSleeperTailLiftTruck.png",
  "/truck/18TonneBoxTruck.png",
  "/truck/18TonneCurtainsideTruck.png",
  "/truck/26TonneCurtainSideTruck.png",
  "/truck/44TonneSleeperTruck.png",
] as const

const compactCarMainNames = [
  "Fiat 500",
  "Hyundai i10 Auto",
  "VW Golf",
  "Focus Auto",
] as const

const compactCarAdditionalNames = [
  "Focus Estate",
  "Mondeo",
  "Mondeo Auto",
  "Mondeo Estate",
  "RAV4 Auto",
  "C Class Auto",
  "E Class Auto",
  "Range Rover",
] as const

const vanMainNames = [
  "Caddy Van",
  "Ford Transit SWB",
  "VW Transporter Automatic",
  "Ford Transit MWB",
  "Ford Transit LWB",
  "4 MTR Sprinter",
  "Ford Luton Box Tail Lift",
  "Ford Transit Dropside Van",
  "3.5 Tonne Tipper Transit",
  "Recovery Van",
  "VW Campervan",
  "12.5M Cherry Picker 3.5T",
] as const

const minibusMainNames = [
  "Vauxhall Zafira 5 + 2",
  "Galaxy 7 Seater Manual",
  "Galaxy 7 Seater Automatic",
  "9 Seater Manual",
  "9 Seater Automatic",
  "Ford Minibus 12 Seater",
  "Ford Minibus 15 Seater",
  "Ford Minibus LITE 17 Seater (no D1)",
  "Ford Minibus 17 Seater",
] as const

const truckMainNames = [
  "Ford Luton 3.5 ton Tail Box Lift Truck",
  "3.5 Tonne Tipper Transit Truck",
  "3.5 Tonne Recovery Truck",
  "7.5 Tonne Box Truck With Tail Lift",
  "7.5 Tonne Curtain Side Truck",
  "7.5 Tonne Dropside Truck",
  "7.5 Tonne Tipper Truck",
  "7.5 Tonne Sleeper Tail Lift Truck",
  "18 Tonne Box Truck",
  "18 Tonne Curtain Side Truck",
  "26 Tonne Curtain Side Truck",
  "44 Tonne Sleeper Truck",
] as const

export const siteConfig = {
  businessName: "Compact Car Hire Newport",
  companyTagline: "Practical self-drive hire across Newport and nearby regional routes",
  legalBusinessName: "Compact Car Hire Newport",
  locationName: "Newport",
  siteUrl: "https://compactcarhirenewport.co.uk",
  phone: "+442039099745",
  displayPhone: "0203 909 9745",
  ui: {
    navLocationsLabel: "Locations",
    navServicesLabel: "Services",
    navCallToBookLabel: "Call to Book",
    navCallShortLabel: "Call",
    bookNowLabel: "Call to Book",
    footerCopyrightLabel: "? 2026 Compact Car Hire Newport. All rights reserved.",
  },
} as const

export function getMetadataBase() {
  const rawSiteUrl = siteConfig.siteUrl

  if (isTemplateToken(rawSiteUrl)) {
    return new URL("https://example.com")
  }

  return new URL(rawSiteUrl)
}

export function withCanonicalPath(
  metadata: ServicePageContent["metadata"],
  canonicalPath: string,
) {
  return {
    ...metadata,
    alternates: {
      canonical: canonicalPath,
    },
  }
}

export const serviceNavigation: Array<{
  label: string
  route: string
}> = [
  { label: "Compact Car Hire", route: "/" },
  { label: "Van Hire", route: "/van-hire" },
  { label: "Minibus Hire", route: "/minibus-hire" },
  { label: "Truck Hire", route: "/truck-hire" },
]

function createVehicles(
  names: readonly string[],
  images: readonly string[],
  vehicleText: VehicleText[],
): Vehicle[] {
  return names.map((name, index) => ({
    title: name,
    body: vehicleText[index].body,
    image: images[index],
    alt: vehicleText[index].alt,
  }))
}

function createContentSet(args: {
  tokens: ContentTokenSet
  mainVehicleNames: readonly string[]
  mainVehicleImages: readonly string[]
  inventorySectionId: string
  currentLocationName?: string
  mainVehicleAction?: boolean
  additionalVehicleNames?: readonly string[]
  additionalVehicleImages?: readonly string[]
}): ServicePageContent {
  const {
    tokens,
    mainVehicleNames,
    mainVehicleImages,
    inventorySectionId,
    currentLocationName,
    mainVehicleAction = false,
    additionalVehicleNames,
    additionalVehicleImages,
  } = args

  return {
    metadata: {
      title: tokens.metadata.title,
      description: tokens.metadata.description,
    },
    currentLocationName,
    heroImage: tokens.heroImage,
    heroAlt: tokens.heroAlt,
    heroTitle: tokens.heroTitle,
    heroDescription: tokens.heroDescription,
    heroSecondaryActionLabel: tokens.heroSecondaryActionLabel,
    inventorySectionId,
    mainServiceKicker: tokens.mainServiceKicker,
    mainServiceTitle: tokens.mainServiceTitle,
    mainServiceDescription: tokens.mainServiceDescription,
    mainVehicles: createVehicles(
      mainVehicleNames,
      mainVehicleImages,
      tokens.mainVehicles,
    ),
    mainVehicleAction,
    whyChooseKicker: tokens.whyChooseKicker,
    whyChooseTitle: tokens.whyChooseTitle,
    whyChooseDescription: tokens.whyChooseDescription,
    whyChooseItems: tokens.whyChooseItems,
    additionalServicesKicker: tokens.additionalServicesKicker,
    additionalServicesTitle: tokens.additionalServicesTitle,
    additionalServicesDescription: tokens.additionalServicesDescription,
    additionalVehicles:
      additionalVehicleNames &&
      additionalVehicleImages &&
      tokens.additionalVehicles
        ? createVehicles(
            additionalVehicleNames,
            additionalVehicleImages,
            tokens.additionalVehicles,
          )
        : undefined,
    featureCtaTitle: tokens.featureCtaTitle,
    featureCtaDescription: tokens.featureCtaDescription,
    serviceAreasKicker: tokens.serviceAreasKicker,
    serviceAreasTitle: tokens.serviceAreasTitle,
    serviceAreasDescription: tokens.serviceAreasDescription,
    localRelevanceKicker: tokens.localRelevanceKicker,
    localRelevanceTitle: tokens.localRelevanceTitle,
    localRelevanceDescription: tokens.localRelevanceDescription,
    localRelevanceBlocks: tokens.localRelevanceBlocks,
    bottomCtaTitle: tokens.bottomCtaTitle,
    bottomCtaDescription: tokens.bottomCtaDescription,
    faqKicker: tokens.faqKicker,
    faqTitle: tokens.faqTitle,
    faqs: tokens.faqs,
  }
}

function createCompactMainVehicleTexts(location: string): VehicleText[] {
  return [
    {
      body: `The Fiat 500 is ideal for short ${location} trips where easy parking, simple handling and a small footprint matter most.`,
      alt: `Fiat 500 compact hire car for easy local driving in ${location}`,
    },
    {
      body: `The Hyundai i10 Auto suits drivers who want relaxed automatic driving for errands, station collections and everyday travel around ${location}.`,
      alt: `Hyundai i10 automatic compact hire car in ${location}`,
    },
    {
      body: `The VW Golf adds extra comfort and luggage space while keeping the practical feel that works well for mixed local and regional mileage from ${location}.`,
      alt: `Volkswagen Golf hatchback available for hire in ${location}`,
    },
    {
      body: `The Focus Auto is a useful all-rounder when your ${location} journey mixes town driving with longer runs on faster roads.`,
      alt: `Ford Focus automatic available for self-drive hire in ${location}`,
    },
  ]
}

function createCompactAdditionalVehicleTexts(location: string): VehicleText[] {
  return [
    {
      body: `The Focus Estate gives ${location} drivers extra boot space without stepping too far away from the feel of a normal everyday car.`,
      alt: `Ford Focus Estate available for practical luggage space in ${location}`,
    },
    {
      body: `The Mondeo is a sensible step up when comfort matters more, especially for longer journeys starting or ending in ${location}.`,
      alt: `Ford Mondeo saloon for longer road journeys from ${location}`,
    },
    {
      body: `The Mondeo Auto suits ${location} customers who want easier traffic driving while keeping the cabin comfort of a larger saloon.`,
      alt: `Ford Mondeo automatic for comfortable self-drive hire in ${location}`,
    },
    {
      body: `The Mondeo Estate works well when ${location} travel needs more luggage room for family visits, airport runs or longer stays away.`,
      alt: `Ford Mondeo Estate with extended luggage room for ${location} hires`,
    },
    {
      body: `The RAV4 Auto is a practical SUV option for ${location} journeys that need extra cabin flexibility and a higher driving position.`,
      alt: `Toyota RAV4 automatic SUV for flexible travel around ${location}`,
    },
    {
      body: `The C Class Auto gives ${location} customers a more refined option for business travel, client meetings and longer personal trips.`,
      alt: `Mercedes C Class automatic for executive car hire in ${location}`,
    },
    {
      body: `The E Class Auto is well suited to longer mileage from ${location} where extra cabin space and motorway comfort make a difference.`,
      alt: `Mercedes E Class automatic executive vehicle hire in ${location}`,
    },
    {
      body: `The Range Rover is there when a ${location} booking needs premium comfort, stronger road presence and more flexible luggage space.`,
      alt: `Range Rover SUV hire for premium travel in ${location}`,
    },
  ]
}

function createNearbyWhyChooseItems(location: string): WhyChooseText[] {
  return [
    {
      title: "Useful compact fleet",
      body: `Our compact line-up suits ${location} travel that calls for easy parking, light everyday driving and sensible motorway comfort.`,
    },
    {
      title: "Manual and automatic options",
      body: `Whether you want a simple city car or an automatic hatchback for ${location} traffic, we keep the choice practical.`,
    },
    {
      title: "Straightforward booking support",
      body: `We focus on helping ${location} customers choose a vehicle that fits the actual trip rather than overcomplicating the booking.`,
    },
    {
      title: "Good fit for mixed routes",
      body: `A compact car is often the most practical option when ${location} driving mixes residential roads, station access and quicker regional links.`,
    },
    {
      title: "Wider fleet available",
      body: `If your ${location} journey needs more than a compact car, we can also help with larger cars, vans, minibuses and trucks.`,
    },
    {
      title: "Built around real local use",
      body: `Our service is shaped around the kind of everyday driving ${location} customers actually need to do.`,
    },
  ]
}

type NearbyLocationProfile = {
  location: string
  heroImage: string
  heroAlt: string
  metadataDescription: string
  heroDescription: string
  serviceDescription: string
  whyChooseDescription: string
  serviceAreasDescription: string
  localRelevanceDescription: string
  localBlocks: LocalBlockText[]
  faqs: FaqText[]
}

function createNearbyLocationTokens(profile: NearbyLocationProfile): ContentTokenSet {
  return {
    metadata: {
      title: `Compact Car Hire ${profile.location} | Self-Drive Small Cars`,
      description: profile.metadataDescription,
    },
    heroImage: profile.heroImage,
    heroAlt: profile.heroAlt,
    heroTitle: `Compact Car Hire in ${profile.location}`,
    heroDescription: profile.heroDescription,
    heroSecondaryActionLabel: "View vehicle options",
    mainServiceKicker: `${profile.location} compact car hire`,
    mainServiceTitle: `Easy self-drive compact car hire in ${profile.location}`,
    mainServiceDescription: profile.serviceDescription,
    mainVehicles: createCompactMainVehicleTexts(profile.location),
    whyChooseKicker: "Why choose us",
    whyChooseTitle: `Why compact car hire works well for ${profile.location} drivers`,
    whyChooseDescription: profile.whyChooseDescription,
    whyChooseItems: createNearbyWhyChooseItems(profile.location),
    additionalServicesKicker: "More vehicle options",
    additionalServicesTitle: `Need more than a compact car in ${profile.location}?`,
    additionalServicesDescription: `Alongside compact car hire in ${profile.location}, we can also help with estates, larger saloons, SUVs and the wider fleet of vans, minibuses and trucks when the journey needs more room.`,
    additionalVehicles: createCompactAdditionalVehicleTexts(profile.location),
    featureCtaTitle: `Check compact car availability in ${profile.location}`,
    featureCtaDescription: `Tell us what sort of ${profile.location} driving you have planned and we will help you line up a practical compact car quickly.`,
    serviceAreasKicker: "Areas we cover",
    serviceAreasTitle: `Vehicle hire for ${profile.location} and nearby routes`,
    serviceAreasDescription: profile.serviceAreasDescription,
    localRelevanceKicker: "Local driving guide",
    localRelevanceTitle: `Why compact car hire makes sense in ${profile.location}`,
    localRelevanceDescription: profile.localRelevanceDescription,
    localRelevanceBlocks: profile.localBlocks,
    bottomCtaTitle: `Book compact car hire in ${profile.location}`,
    bottomCtaDescription: `If you need a small self-drive car in ${profile.location} for local travel, work appointments or a wider regional journey, get in touch and we will help you choose the right vehicle.`,
    faqKicker: `${profile.location} hire FAQs`,
    faqTitle: `Common questions about compact car hire in ${profile.location}`,
    faqs: profile.faqs,
  }
}

                    const homepageTokens: ContentTokenSet = {
          metadata: {
            title: "Compact Car Hire Newport | Self-Drive Vehicle Hire",
            description: "Compact car hire in Newport for local driving, station access, business mileage and wider regional travel, with vans, minibuses and trucks also available when you need more room.",
          },
          heroImage: "/images/compactcarhirenewport-co-uk-homepage-compact-car-fleet.png",
          heroAlt: "Compact hire cars prepared for everyday driving in Newport",
          heroTitle: "Compact car hire in Newport made practical",
          heroDescription: "Compact car hire in Newport for local travel, work visits, shopping runs and wider regional mileage, backed by a broader self-drive fleet when you need extra space.",
          heroSecondaryActionLabel: "View vehicle options",
          mainServiceKicker: "Compact car hire",
          mainServiceTitle: "Self-drive compact cars for everyday journeys in Newport",
          mainServiceDescription: `Our Newport compact car hire service is built around the sort of journeys people actually make day to day. Some bookings stay close to town and need a car that remains easy around ordinary parking, local appointments, station access and short repeated stops. Others widen into business mileage, family visits or wider regional driving where the vehicle still needs to feel comfortable enough for the road section beyond town.

That is why compact car hire works so well here. A smaller hatchback gives you something that stays manageable in local traffic and straightforward to park, without becoming too limited once the route grows. It is a practical fit for replacement transport, ordinary work travel, shopping, local errands and mixed local-regional journeys. If the booking later needs more carrying room, more seats or a different vehicle altogether, the wider self-drive fleet also includes larger cars, vans, minibuses and trucks.`,
          mainVehicles: createCompactMainVehicleTexts("Newport"),
          whyChooseKicker: "Why choose us",
          whyChooseTitle: "A practical approach to self-drive hire in Newport",
          whyChooseDescription: "We keep compact car hire straightforward for Newport customers by focusing on usable vehicles, clear support and cars that work well for both local driving and wider regional mileage.",
          whyChooseItems: [
            { title: "Cars that suit real journeys", body: "Our compact range is chosen around everyday usability, with smaller cars that feel comfortable locally and still practical once the route widens." },
            { title: "Easy local driving", body: "Smaller hatchbacks remain easier around parking, repeated stops and ordinary town traffic than vehicles with more bulk than the journey really needs." },
            { title: "Good fit for wider mileage", body: "Newport bookings often blend local movement with broader regional routes, so the compact range is chosen to stay practical beyond the shortest run." },
            { title: "Straightforward booking help", body: "We focus on what the vehicle needs to do in practice rather than on overcomplicated booking language or vague category labels." },
            { title: "Wider fleet available", body: "If the booking later needs more space, we can also help with larger cars, vans, minibuses and trucks." },
            { title: "Useful for ordinary life", body: "Replacement transport, appointments, work visits, shopping and family mileage are all common compact-car uses in Newport." },
          ],
          additionalServicesKicker: "Wider fleet options",
          additionalServicesTitle: "More vehicle choice when your Newport booking needs extra room",
          additionalServicesDescription: "If a compact hatchback is not the right fit, we can also help with larger cars, estates, SUVs and executive automatics. The wider self-drive fleet also includes vans, minibuses and trucks for bigger transport jobs.",
          additionalVehicles: createCompactAdditionalVehicleTexts("Newport"),
          featureCtaTitle: "Looking for the right vehicle in Newport?",
          featureCtaDescription: "Tell us what sort of driving you have planned and we will help you choose a compact car or a larger vehicle that makes practical sense.",
          serviceAreasKicker: "Areas we cover",
          serviceAreasTitle: "Vehicle hire across Newport and surrounding routes",
          serviceAreasDescription: "We support customers across Newport, the A48 Southern Distributor Road corridor, M4-linked journeys, station access near Newport railway station and practical town-centre travel around Friars Walk, Kingsway and nearby business routes.",
          localRelevanceKicker: "Driving in Newport",
          localRelevanceTitle: "Why compact car hire works well in Newport",
          localRelevanceDescription: `Compact car hire works particularly well in Newport because the town regularly mixes short local errands with fast access onto bigger roads. A booking might start with a station collection at Newport railway station, a stop near Friars Walk or John Frost Square, and then widen quickly onto the A48 Southern Distributor Road or the M4 for mileage towards Cardiff, Bristol or Monmouthshire. In that kind of pattern, a smaller hatchback stays easier to place in ordinary town traffic and much less awkward in multi-storey or short-stay parking than a larger vehicle.

That practicality also shows up on everyday replacement transport and business use. Customers heading to the Celtic Manor Resort, office visits around Chepstow Road or retail runs across Spytty and the city centre often want a car that is simple in local streets but still comfortable beyond Newport itself. A compact car gives that balance without overcommitting the booking to a bigger vehicle than the route really needs.`,
          localRelevanceBlocks: [
            {
              title: "A sensible fit for everyday local driving",
              body: `Compact cars suit Newport because many local journeys revolve around repeat stops rather than one straight motorway run. That can mean parking for Friars Walk, picking up at Newport station, calling at Newport Market or crossing between central streets and residential districts without wanting the footprint of a larger vehicle.

That local usability is one of the clearest advantages of a smaller hatchback. It is easier to place, easier to park and easier to live with across short-stay city-centre parking and repeated urban stops.`,
            },
            {
              title: "Still useful once the route widens",
              body: `A lot of Newport journeys do not stay local. After the town section, the route often opens onto the A48 SDR, the A4042 or the M4 at Junctions 24 to 28, so the car still needs to remain comfortable enough once the booking spreads into wider South Wales mileage.

For many customers, that is exactly the right balance: straightforward around central Newport and still settled enough once the trip grows beyond the city.`,
            },
            {
              title: "Good for replacement and mixed-use bookings",
              body: `Work travel, family visits, Friars Walk shopping, appointments near the Royal Gwent site and temporary replacement transport all reward a vehicle that feels manageable from the first mile.

If the booking later needs more carrying room or more passenger space, the wider self-drive fleet provides the next step without forcing you to start again elsewhere.`,
            },
          ],
          bottomCtaTitle: "Book compact car hire in Newport with practical support",
          bottomCtaDescription: "If you need a compact car in Newport for local driving, business mileage or wider regional travel, get in touch and we will help you line up a suitable vehicle.",
          faqKicker: "Common questions",
          faqTitle: "Compact car hire FAQs for Newport",
          faqs: [
            { question: "Why choose compact car hire in Newport?", answer: "Compact cars make sense in Newport because they are easier for local driving and parking while still being comfortable enough for wider regional routes." },
            { question: "Can I arrange compact car hire in Newport at short notice?", answer: "Yes, subject to availability. If you need a compact car quickly in Newport, call us and we will talk through what is ready for the timing you need." },
            { question: "Do you only offer small cars in Newport?", answer: "No. Compact cars are the focus on this page, but we also provide larger cars, estates, SUVs, vans, minibuses and trucks when the booking needs more room." },
            { question: "What are compact hire cars in Newport commonly used for?", answer: "Common uses include local travel, shopping, business visits, family mileage, replacement transport and mixed local-regional journeys." },
            { question: "Are automatic compact cars available in Newport?", answer: "Yes, subject to availability. If you prefer an automatic for local traffic or wider regional travel, ask when you book." },
            { question: "What should I tell you when booking in Newport?", answer: "The most useful details are the dates, expected route, whether you want manual or automatic driving, and whether there is any chance you will need more room than a compact hatchback offers." },
          ],
        }

            const vanHireTokens: ContentTokenSet = {
              metadata: {
                title: "Van Hire Newport | Practical Vans for Moves, Deliveries and Trade",
                description: "Van hire in Newport for house moves, deliveries, trade jobs and specialist transport, with compact vans, Transits, Lutons and more available.",
              },
              heroImage: "/images/compactcarhirenewport-co-uk-van-hire-main-fleet.png",
              heroAlt: "Modern self-drive rental van ready for loading in Newport",
              heroTitle: "Van hire in Newport for moves, work and collections",
              heroDescription: "Practical van hire in Newport for house moves, trade jobs, stock collections, deliveries and specialist transport when a standard car is not enough.",
              heroSecondaryActionLabel: "View van options",
              mainServiceKicker: "Newport van fleet",
              mainServiceTitle: "Van hire for practical transport across Newport and beyond",
              mainServiceDescription: `Our Newport van hire service is built for customers who need a vehicle that suits the job in front of them. Some bookings stay local and involve furniture collections, stock runs or straightforward moving-day loads, while others widen into trade work, site use or longer regional deliveries. That means the right answer is rarely one generic van size. It helps to have a proper spread that covers compact carrying, mid-sized working vans and larger load-space options.

Many van bookings from Newport also mix local access with wider road mileage in the same day. A job may begin with a town-centre collection or residential address, then widen into a longer regional run. Keeping the fleet practical lets us support that variety without forcing customers into more vehicle than the load actually needs.`,
              mainVehicles: [
                { body: "A compact option for smaller Newport jobs where you need enclosed load space without driving something oversized.", alt: "Caddy van for compact load carrying in Newport" },
                { body: "Useful for everyday trade work, deliveries and light moving jobs around Newport and nearby routes.", alt: "Ford Transit SWB van for local Newport hire" },
                { body: "A practical automatic van for Newport customers who want easier driving in traffic and on longer road sections.", alt: "VW Transporter automatic van hire in Newport" },
                { body: "A solid fit for medium loads, site equipment and move-related jobs across Newport.", alt: "Ford Transit MWB van ready for practical Newport jobs" },
                { body: "A strong choice for longer items, fuller loads and larger one-vehicle jobs starting in Newport.", alt: "Ford Transit LWB van for larger Newport loads" },
                { body: "Useful when extra cargo length matters more than keeping the van compact, especially for commercial or event loads.", alt: "4 metre Sprinter van available for Newport hire" },
                { body: "Ideal when the Newport booking involves bulky furniture, appliances or stacked loads that need tail-lift help.", alt: "Luton box van with tail lift for moves in Newport" },
                { body: "A practical pick for open-load work, site materials and jobs where quick side access matters.", alt: "Dropside transit van for trade and site use in Newport" },
                { body: "Useful for rubble, green waste and site clearances where tipping capability saves time on the job.", alt: "3.5 tonne tipper van hire in Newport" },
                { body: "A specialist option for vehicle recovery and transport jobs that need the right platform rather than an ordinary van.", alt: "Recovery vehicle available from the Newport fleet" },
                { body: "Suitable for customers who need a flexible transport option with camper layout practicality for longer personal travel.", alt: "VW campervan available for Newport self-drive hire" },
                { body: "A specialist access vehicle for external maintenance, facilities work and higher-reach jobs around Newport.", alt: "12.5 metre cherry picker vehicle hire in Newport" },
              ],
              whyChooseKicker: "Why choose us",
              whyChooseTitle: "A practical van-hire range for Newport jobs",
              whyChooseDescription: "We focus on vans that make sense for the work in front of you, whether that means a compact load carrier, a Luton for moving day or a specialist vehicle for a more specific job.",
              whyChooseItems: [
                { title: "Useful size spread", body: "The fleet covers everything from compact vans to larger load-space options, helping Newport customers avoid booking more vehicle than they need." },
                { title: "Good fit for mixed work", body: "Trade runs, house moves, site jobs, collections and regional deliveries all place different demands on a van, and the range is set up around that." },
                { title: "Straightforward support", body: "We keep the conversation focused on the load, route and job type so the vehicle choice stays practical." },
                { title: "Specialist options available", body: "When a booking needs tail-lift support, open-load access, tipping or recovery capability, the wider fleet can cover that too." },
                { title: "Useful beyond Newport", body: "The van fleet works well for local jobs and for wider regional mileage starting from Newport." },
                { title: "Flexible self-drive choice", body: "Customers can move from a simple working van to something more specialist without having to switch providers." },
              ],
              featureCtaTitle: "Need the right van in Newport?",
              featureCtaDescription: "Tell us the job, load type and route, and we will help you choose a van that actually suits the work.",
              serviceAreasKicker: "Where van hire helps",
              serviceAreasTitle: "Van hire across Newport and surrounding routes",
              serviceAreasDescription: "We support van hire in Newport for loads moving between central streets, Spytty and Chepstow Road, collections near Newport station and Friars Walk, and wider jobs that then push onto the A48 SDR, A4042 and M4.",
              localRelevanceKicker: "Van-hire guide",
              localRelevanceTitle: "Why van hire is useful in Newport",
              localRelevanceDescription: `Van hire works well in Newport because so many local jobs blend town access with broader South Wales mileage. A booking might begin with furniture collection close to Friars Walk, stock runs around Spytty Retail Park, or trade materials moving between Chepstow Road and central addresses, then widen onto the A48 Southern Distributor Road or M4 later in the same day. The van therefore has to be practical for loading and stopping locally, not just for longer distance driving.

That is why a sensible size range matters. Newport customers do not all need the same van, and matching the vehicle to the load is especially useful where city-centre access, station-side roads and residential streets meet larger regional roads. A compact van may be ideal for a local collection, while a Luton or larger Transit becomes the smarter option once the load and route grow.`,
              localRelevanceBlocks: [
                {
                  title: "Useful around local loading and access",
                  body: `Many Newport van bookings start with local collections, residential access or short commercial runs around central streets, Chepstow Road and station-side routes, where it helps if the vehicle still feels manageable in ordinary traffic and loading bays.

That is one reason smaller and mid-sized vans remain such useful options. They cover a wide range of practical jobs without turning central Newport access into extra hassle.`,
                },
                {
                  title: "Still practical on wider mileage",
                  body: `A lot of Newport van jobs quickly widen beyond town. Routes out via the A48 SDR, the A4042 or the M4 need a van that remains useful once the job moves out onto faster or longer roads.

Choosing the right load space and shape at the start makes that wider run simpler, especially when the day includes more than one drop or collection.`,
                },
                {
                  title: "Easy to step up for larger loads",
                  body: `Some Newport bookings start with a simple carrying job and then turn into something bulkier. That is why it helps to have access to Lutons, dropsides, tippers and other specialist options from the same fleet.

You can begin with the practical van for the job and still scale up cleanly if the load or route changes.`,
                },
              ],
              bottomCtaTitle: "Book van hire in Newport with the right load-space support",
              bottomCtaDescription: "If you need a van in Newport for moving, trade work, deliveries or specialist transport, get in touch and we will help you line up a practical option.",
              faqKicker: "Common questions",
              faqTitle: "Van hire FAQs for Newport",
              faqs: [
                { question: "What sort of van hire do you offer in Newport?", answer: "We offer compact vans, short- and long-wheelbase Transits, Lutons, dropsides, tippers and specialist options for a wide spread of Newport jobs." },
                { question: "Can I hire a van in Newport for moving house?", answer: "Yes. Newport van hire is often used for local and regional house moves, especially when customers need enclosed load space or tail-lift support." },
                { question: "Do you provide vans for trade and business use in Newport?", answer: "Yes. Trade work, equipment transport, stock movement and commercial collections are all common Newport van-hire uses." },
                { question: "Is Newport van hire useful for longer regional routes too?", answer: "Yes. Many Newport bookings extend onto broader roads across the region, so the van fleet is chosen to stay practical beyond the shortest local run." },
                { question: "Can I ask for help choosing the right van size?", answer: "Yes. Tell us what you are carrying, where it is going and any access issues, and we will help you choose the right type of van." },
                { question: "Do you only offer standard vans in Newport?", answer: "No. Alongside standard enclosed vans, the wider fleet also includes Lutons, dropsides, tippers, recovery vehicles, campervans and cherry pickers." },
              ],
            }

            const minibusHireTokens: ContentTokenSet = {
              metadata: {
                title: "Minibus Hire Newport | Self-Drive Minibuses for Group Travel",
                description: "Minibus hire in Newport for family groups, events, airport runs and organised travel, with flexible seat layouts and practical self-drive options.",
              },
              heroImage: "/images/compactcarhirenewport-co-uk-minibus-hire-main-fleet.png",
              heroAlt: "Self-drive minibus available for group travel in Newport",
              heroTitle: "Minibus hire in Newport for practical group journeys",
              heroDescription: "Self-drive minibus hire in Newport for airport runs, event transport, family travel, business groups and organised trips when one car is not enough.",
              heroSecondaryActionLabel: "View minibus options",
              mainServiceKicker: "Newport minibus fleet",
              mainServiceTitle: "Minibus hire for group travel across Newport and the wider region",
              mainServiceDescription: `Our Newport minibus hire service is designed for the sort of journeys that are awkward in multiple cars but do not call for a coach. Family groups, event travel, airport runs, team transport and organised day trips all become easier when everyone can stay in one vehicle. That makes minibus hire particularly useful when the booking begins with several local pick-ups and then widens into a longer regional journey.

The right minibus is not only about seat count. It also needs to stay practical for luggage, comfort and the kind of route the group is actually covering. Keeping the fleet focused on usable self-drive options makes it easier to line up a vehicle that works for the passengers, bags and distance involved.`,
              mainVehicles: [
                { body: "A practical smaller-group option when you need more flexibility than a standard car but not a full-size minibus.", alt: "5 plus 2 seat people carrier for Newport group travel" },
                { body: "A useful minibus for family groups, sports travel and event trips starting in Newport.", alt: "9 seat minibus ready for Newport hire" },
                { body: "An efficient option for group transport where luggage and passenger comfort both matter.", alt: "Ford Tourneo minibus available in Newport" },
                { body: "A larger-capacity option for organised travel, airport journeys and wider group mileage.", alt: "14 seat minibus for self-drive hire in Newport" },
                { body: "Suitable for larger group bookings where keeping everyone together is more practical than using several cars.", alt: "17 seat minibus ready for Newport group trips" },
                { body: "Useful for extra luggage flexibility on larger trips or where the route involves a full passenger load.", alt: "Minibus with wider luggage capacity for Newport travel" },
                { body: "A practical choice for longer group journeys that need a comfortable self-drive setup from Newport.", alt: "Modern self-drive minibus for longer journeys from Newport" },
                { body: "Helpful for event transport, airport runs and coordinated day travel where one vehicle keeps the plan simple.", alt: "Newport minibus prepared for event and airport transport" },
                { body: "A flexible option for community, club and family bookings that need practical shared transport.", alt: "Shared group minibus available from the Newport fleet" },
              ],
              whyChooseKicker: "Why choose us",
              whyChooseTitle: "A practical self-drive minibus option for Newport groups",
              whyChooseDescription: "We focus on minibuses that make shared travel easier, with practical seating layouts and useful support for the sort of routes groups actually cover from Newport.",
              whyChooseItems: [
                { title: "Useful for shared travel", body: "Minibus hire keeps families, work groups and event travellers together instead of splitting plans across several smaller vehicles." },
                { title: "Good fit for airport and event runs", body: "Newport bookings often involve group travel to airports, celebrations, venues and sports fixtures, where one self-drive minibus is easier to manage." },
                { title: "Practical seating choices", body: "The fleet is designed to cover smaller and larger groups without forcing more capacity than the booking needs." },
                { title: "Wider-road ready", body: "A lot of Newport group travel widens quickly beyond local roads, so the minibuses are chosen to remain practical on longer regional mileage too." },
                { title: "Straightforward booking support", body: "We keep the conversation focused on passengers, luggage and the route rather than on vague vehicle descriptions." },
                { title: "Part of a wider self-drive fleet", body: "If the group plan changes or extra transport is needed, the wider fleet of cars, vans and larger vehicles is available too." },
              ],
              featureCtaTitle: "Need the right minibus in Newport?",
              featureCtaDescription: "Tell us how many people are travelling, the luggage involved and the route you are covering, and we will help you choose a practical self-drive minibus.",
              serviceAreasKicker: "Where minibus hire helps",
              serviceAreasTitle: "Minibus hire across Newport and nearby routes",
              serviceAreasDescription: "We support minibus hire in Newport for station pick-ups, airport travel, event transport, group runs linked to the Celtic Manor, and wider South Wales journeys via the M4 and A48.",
              localRelevanceKicker: "Minibus-hire guide",
              localRelevanceTitle: "Why minibus hire is useful in Newport",
              localRelevanceDescription: `Minibus hire works well in Newport because group travel here often begins with several pick-ups and then widens quickly into longer mileage. A family trip might start at Newport station, move through hotel or residential pick-ups, and then head onto the M4 for Cardiff Airport, Bristol Airport or an event venue. The same is true for sports groups, wedding travel and business events linked to the Celtic Manor Resort. One minibus keeps the timing easier and the group together.

That is why matching the seating and luggage space to the real journey matters. A practical self-drive minibus gives customers a useful middle ground between several cars and a much larger group-transport setup, while still coping with central-Newport pick-ups and longer motorway sections in the same booking.`,
              localRelevanceBlocks: [
                {
                  title: "Better than splitting into several cars",
                  body: `A lot of Newport group bookings are easier when everyone travels together. One vehicle simplifies pick-up points, arrival timing and luggage planning in a way that several separate cars often do not.

That is especially helpful for event travel, family trips and organised outings where keeping the group coordinated matters.`,
                },
                {
                  title: "Useful on wider regional routes",
                  body: `Many Newport minibus journeys do not stay local. Airport runs, fixtures, celebrations and organised day trips often widen quickly onto larger roads across the region.

That is why the minibus choice needs to stay practical for distance as well as passenger count.`,
                },
                {
                  title: "A more flexible group-travel option",
                  body: `Self-drive minibus hire gives Newport customers a practical middle ground between several cars and a larger organised coach setup.

It keeps the trip flexible while still making shared travel easier to manage from the start.`,
                },
              ],
              bottomCtaTitle: "Book minibus hire in Newport with practical group-travel support",
              bottomCtaDescription: "If you need a minibus in Newport for an airport run, event, family trip or organised group journey, get in touch and we will help you line up the right option.",
              faqKicker: "Common questions",
              faqTitle: "Minibus hire FAQs for Newport",
              faqs: [
                { question: "What sort of minibus hire do you offer in Newport?", answer: "We offer self-drive minibuses for smaller and larger groups, covering family travel, airport runs, event trips, sports bookings and organised journeys." },
                { question: "Is Newport minibus hire useful for airport travel?", answer: "Yes. Minibus hire is a practical option for airport runs because it keeps passengers and luggage together in one vehicle." },
                { question: "Can I hire a minibus in Newport for family and event travel?", answer: "Yes. Family groups, weddings, celebrations and organised outings are all common Newport minibus-hire uses." },
                { question: "Do Newport minibuses only suit local journeys?", answer: "No. Many Newport minibus bookings widen into longer regional routes, so the fleet is chosen with that broader mileage in mind." },
                { question: "Can you help me choose the right size minibus?", answer: "Yes. Tell us how many passengers are travelling, what luggage is involved and the route you are taking, and we will help you choose a suitable option." },
                { question: "What if we need different vehicle types for the same trip?", answer: "We can also help with cars, vans and other self-drive options if the group plan needs a wider mix of vehicles." },
              ],
            }

        const truckHireTokens: ContentTokenSet = {
          metadata: {
            title: "Truck Hire Newport | Self-Drive Trucks for Heavy Loads and Commercial Use",
            description: "Truck hire in Newport for heavier transport, site work, removals and commercial jobs, with practical self-drive truck options available.",
          },
          heroImage: "/images/compactcarhirenewport-co-uk-truck-hire-main-fleet.png",
          heroAlt: "Self-drive truck available for heavier transport in Newport",
          heroTitle: "Truck hire in Newport for heavier work and bigger loads",
          heroDescription: "Self-drive truck hire in Newport for removals, commercial carrying, site deliveries and specialist transport when a van is not enough.",
          heroSecondaryActionLabel: "View truck options",
          mainServiceKicker: "Newport truck fleet",
          mainServiceTitle: "Truck hire for practical heavy-load jobs across Newport",
          mainServiceDescription: `Our Newport truck hire service is built around jobs that go beyond ordinary van carrying. Some bookings involve removals, heavier stock movement or site materials, while others need a more specialist vehicle for commercial transport that starts in Newport and then spreads onto larger regional roads. What matters is having the right type of truck for the actual load and route rather than forcing a heavy job into a vehicle that is too limited.

That is why a self-drive truck can be useful both for local loading points and for broader commercial movement in the same day. The right vehicle makes a clear difference to how efficiently the booking runs, especially once heavier items, bulkier loads or repeated drops are involved.`,
          mainVehicles: [
            { body: "Useful for larger removals and commercial carrying where a van is too limited for the size of the load.", alt: "Luton tail-lift truck for practical Newport removals and transport" },
            { body: "A practical option for open-load carrying, equipment movement and jobs where easier side access helps.", alt: "Dropside truck ready for Newport commercial use" },
            { body: "Helpful for site materials, waste movement and heavier work that benefits from tipping capability.", alt: "Tipper truck available for heavier Newport jobs" },
            { body: "A specialist option for plant, machinery or vehicle movement when the job needs a more specific transport setup.", alt: "Recovery-style truck available from the Newport fleet" },
            { body: "Useful for larger commercial carrying and wider regional movement where a more substantial vehicle is the sensible choice.", alt: "Self-drive truck prepared for wider mileage from Newport" },
            { body: "A practical option for heavier one-vehicle transport when the booking needs more carrying capability than a standard van offers.", alt: "Commercial truck hire option for Newport transport work" },
            { body: "Suitable for repeat drop work and planned commercial transport where load handling needs to stay efficient.", alt: "Newport truck available for structured commercial routes" },
            { body: "Helpful for move-related jobs where bulky items and load weight call for a more substantial vehicle format.", alt: "Heavier-duty self-drive vehicle for Newport move and load work" },
            { body: "A specialist support option for customers whose load shape or site access makes a standard enclosed van the wrong fit.", alt: "Practical heavy-load transport option available in Newport" },
            { body: "Useful when the route, load and job type all point clearly to a truck rather than a smaller self-drive vehicle.", alt: "Truck fleet option prepared for larger Newport transport demands" },
            { body: "A practical choice for heavier carrying where planning the right vehicle at the start helps keep the day efficient.", alt: "Self-drive truck option for heavier Newport transport work" },
            { body: "Suitable for customers who need straightforward access to heavier-load transport without stepping into a managed haulage arrangement.", alt: "Newport truck ready for practical self-drive use" },
          ],
          whyChooseKicker: "Why choose us",
          whyChooseTitle: "A practical self-drive truck option for Newport jobs",
          whyChooseDescription: "We keep Newport truck hire focused on real carrying requirements, with useful vehicle options for heavier work, site transport and larger move-related jobs.",
          whyChooseItems: [
            { title: "Useful for heavier loads", body: "Truck hire is there for Newport jobs that clearly need more carrying capability than a van should reasonably handle." },
            { title: "Good fit for commercial work", body: "Site support, stock movement, heavier removals and specialist carrying are all common Newport truck-hire uses." },
            { title: "Wider-road practical", body: "Many Newport truck jobs widen quickly onto larger regional routes, so the fleet is selected around that kind of use." },
            { title: "Straightforward vehicle guidance", body: "We focus on the shape of the load, job type and route so the vehicle choice stays practical." },
            { title: "Part of a broader transport fleet", body: "If the job later turns out to suit a van, Luton, dropside or another vehicle type better, the wider self-drive fleet is there." },
            { title: "Flexible for one-off and repeat jobs", body: "Truck hire can work for both isolated bigger transport tasks and regular heavier-use requirements." },
          ],
          featureCtaTitle: "Need the right truck in Newport?",
          featureCtaDescription: "Tell us what needs to be moved, the route involved and any access considerations, and we will help you line up a practical truck option.",
          serviceAreasKicker: "Where truck hire helps",
          serviceAreasTitle: "Truck hire across Newport and surrounding routes",
          serviceAreasDescription: "We support truck hire in Newport for heavier loads moving between industrial routes, the docks side of the city, Spytty and wider commercial mileage via the A48 SDR, A4042 and M4.",
          localRelevanceKicker: "Truck-hire guide",
          localRelevanceTitle: "Why truck hire is useful in Newport",
          localRelevanceDescription: `Truck hire is useful in Newport because some jobs quickly outgrow ordinary van carrying once heavier consignments, removals or site materials are involved. Newport is a practical place for self-drive truck work because loading can begin locally and then move quickly onto the A48 Southern Distributor Road, the A4042 or the M4 for broader South Wales mileage. That blend of urban access and larger-road carrying is exactly where using the right vehicle from the start makes the day easier.

The right self-drive truck gives customers a practical route into heavier carrying without needing to step into a full haulage setup when the job can still be handled directly. Matching the truck to the job helps keep loading around central Newport, Spytty and wider industrial routes much more straightforward.`,
          localRelevanceBlocks: [
            {
              title: "Useful when a van is not the right fit",
              body: `Some Newport transport jobs simply move beyond what a standard van should reasonably carry. That can be because of load size, load weight or the way items need to be handled between central loading points, commercial estates and larger arterial roads during the day.

Choosing a truck early helps keep the booking efficient instead of forcing the job into the wrong vehicle class.`,
            },
            {
              title: "Practical for local access and wider movement",
              body: `Many Newport truck bookings blend local loading access with wider regional road mileage. That makes a practical self-drive truck useful both for loading points around Newport itself and for the day’s broader route via the A48 SDR or M4.

The key is matching the truck to the carrying job rather than choosing by size alone.`,
            },
            {
              title: "Helpful for site, removal and commercial tasks",
              body: `Truck hire in Newport is often tied to removals, site support, stock movement or heavier one-off transport needs. Those are all situations where the right vehicle can make loading and route planning much more straightforward.

Having access to different truck formats helps keep that choice practical rather than overly rigid.`,
            },
          ],
          bottomCtaTitle: "Book truck hire in Newport with practical heavy-load support",
          bottomCtaDescription: "If you need a truck in Newport for heavier carrying, removals, site work or commercial transport, get in touch and we will help you line up a suitable option.",
          faqKicker: "Common questions",
          faqTitle: "Truck hire FAQs for Newport",
          faqs: [
            { question: "What sort of truck hire do you offer in Newport?", answer: "We offer self-drive truck options for heavier transport, removals, site support and larger commercial carrying where a standard van is not the right fit." },
            { question: "When is truck hire in Newport better than van hire?", answer: "Truck hire is the better option when the load size, carrying demand or job type clearly goes beyond what a normal van should reasonably handle." },
            { question: "Can I use Newport truck hire for removals and commercial jobs?", answer: "Yes. Newport truck hire is commonly used for heavier removals, commercial transport, stock movement and site-related work." },
            { question: "Do Newport truck bookings only stay local?", answer: "No. Many Newport truck jobs extend onto larger regional routes, so the fleet is selected with wider mileage in mind as well." },
            { question: "Can you help me choose the right truck?", answer: "Yes. Tell us what is being moved, how it needs to be loaded and where it is going, and we will help you choose a practical option." },
            { question: "What if I actually need a different vehicle type?", answer: "If the job turns out to suit a van, Luton, dropside or another vehicle better, the wider self-drive fleet gives you that flexibility." },
          ],
        }

        const location1Tokens = createNearbyLocationTokens({
          location: "Cardiff",
          heroImage: "/images/compactcarhirenewport-co-uk-nearby-location-fleet-a.png",
          heroAlt: "Compact hire car ready for practical travel around Cardiff",
          metadataDescription: "Compact car hire in Cardiff for local driving, work trips and practical regional mileage.",
          heroDescription: "Compact car hire in Cardiff for everyday local travel, appointments and wider mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Cardiff works well because many local bookings mix city-centre stops with wider South Wales mileage. A smaller hatchback is useful around Cardiff Central, Queen Street, St Mary Street access points and shopping trips near St David’s or the civic centre, while still remaining comfortable enough once the route widens onto the A48 or the M4.

That practicality suits replacement transport, work visits, family mileage and mixed-use journeys around Cardiff. You get a self-drive car that stays manageable in central traffic without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Cardiff compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Cardiff and nearby regional routes, including town travel, business mileage and onward local-regional journeys.",
          localRelevanceDescription: `Cardiff is a strong fit for compact car hire because many journeys here combine city-centre driving with quick access to larger roads. A smaller vehicle is useful around Cardiff Central station, Queen Street, the St David’s shopping area and central car parks off Dumfries Place or Westgate Street, while still remaining comfortable enough once the booking heads out towards the A48 or the M4.

That balance matters on bookings that mix shopping, appointments, Principality Stadium-area travel, business visits and regional mileage in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Cardiff driving", body: `Compact cars are useful in Cardiff because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Cardiff trips can quickly widen beyond local roads into larger regional mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Cardiff bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Cardiff?", answer: "Compact cars are a practical option in Cardiff because they stay easy for local driving and parking while remaining comfortable enough for wider regional mileage." },
            { question: "Is compact car hire in Cardiff useful for town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Cardiff journeys." },
            { question: "Do you offer automatic compact cars in Cardiff?", answer: "Yes, subject to availability. If you prefer automatic driving for Cardiff traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Cardiff?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Cardiff." },
            { question: "Can Cardiff compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Cardiff booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location2Tokens = createNearbyLocationTokens({
          location: "Cwmbran",
          heroImage: "/images/compactcarhirenewport-co-uk-nearby-location-fleet-b.png",
          heroAlt: "Compact hire car ready for practical travel around Cwmbran",
          metadataDescription: "Compact car hire in Cwmbran for local driving, work trips and practical regional mileage.",
          heroDescription: "Compact car hire in Cwmbran for everyday local travel, appointments and wider mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Cwmbran works well because local bookings often revolve around the Cwmbran Centre, General Rees Square, station access and short practical runs before widening out onto the A4042. A smaller hatchback is easier for day-to-day parking and shorter local stops, while still remaining comfortable enough for broader routes later in the day.

That practicality suits replacement transport, work visits, family mileage and mixed-use journeys around Cwmbran. You get a self-drive car that stays manageable locally without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Cwmbran compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Cwmbran and nearby regional routes, including town travel, business mileage and onward local-regional journeys.",
          localRelevanceDescription: `Cwmbran is a strong fit for compact car hire because many journeys here combine town-centre driving with quick access to the A4042 and wider South Wales mileage. A smaller vehicle is useful around the Cwmbran Centre, General Rees Square, Cwmbran railway station and ordinary retail parking, while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Cwmbran driving", body: `Compact cars are useful in Cwmbran because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Cwmbran trips can quickly widen beyond local roads into larger regional mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Cwmbran bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Cwmbran?", answer: "Compact cars are a practical option in Cwmbran because they stay easy for local driving and parking while remaining comfortable enough for wider regional mileage." },
            { question: "Is compact car hire in Cwmbran useful for town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Cwmbran journeys." },
            { question: "Do you offer automatic compact cars in Cwmbran?", answer: "Yes, subject to availability. If you prefer automatic driving for Cwmbran traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Cwmbran?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Cwmbran." },
            { question: "Can Cwmbran compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Cwmbran booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location3Tokens = createNearbyLocationTokens({
          location: "Pontypool",
          heroImage: "/images/compactcarhirenewport-co-uk-nearby-location-fleet-a.png",
          heroAlt: "Compact hire car ready for practical travel around Pontypool",
          metadataDescription: "Compact car hire in Pontypool for local driving, work trips and practical regional mileage.",
          heroDescription: "Compact car hire in Pontypool for everyday local travel, appointments and wider mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Pontypool works well because local bookings often mix short town travel with wider mileage along the A4042 corridor. A smaller hatchback is easier around town-centre stops, Pontypool Park visits and collections linked to Pontypool and New Inn station, while still remaining comfortable enough for broader routes later in the day.

That practicality suits replacement transport, work visits, family mileage and mixed-use journeys around Pontypool. You get a self-drive car that stays manageable locally without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Pontypool compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Pontypool and nearby regional routes, including town travel, business mileage and onward local-regional journeys.",
          localRelevanceDescription: `Pontypool is a strong fit for compact car hire because many journeys here combine local driving with quick access to wider routes. A smaller vehicle is useful around Hanbury Road, Pontypool Park, local high-street stops and Pontypool and New Inn station access, while still remaining comfortable enough once the booking heads out via the A4042.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Pontypool driving", body: `Compact cars are useful in Pontypool because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Pontypool trips can quickly widen beyond local roads into larger regional mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Pontypool bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Pontypool?", answer: "Compact cars are a practical option in Pontypool because they stay easy for local driving and parking while remaining comfortable enough for wider regional mileage." },
            { question: "Is compact car hire in Pontypool useful for town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Pontypool journeys." },
            { question: "Do you offer automatic compact cars in Pontypool?", answer: "Yes, subject to availability. If you prefer automatic driving for Pontypool traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Pontypool?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Pontypool." },
            { question: "Can Pontypool compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Pontypool booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location4Tokens = createNearbyLocationTokens({
          location: "Abergavenny",
          heroImage: "/images/compactcarhirenewport-co-uk-nearby-location-fleet-b.png",
          heroAlt: "Compact hire car ready for practical travel around Abergavenny",
          metadataDescription: "Compact car hire in Abergavenny for local driving, work trips and practical regional mileage.",
          heroDescription: "Compact car hire in Abergavenny for everyday local travel, appointments and wider mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Abergavenny works well because local bookings often mix ordinary town movement with wider regional mileage in the same booking. A smaller hatchback is easier for day-to-day parking and shorter local stops, while still remaining comfortable enough for broader routes later in the day.

That practicality suits replacement transport, work visits, family mileage and mixed-use journeys around Abergavenny. You get a self-drive car that stays manageable locally without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Abergavenny compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Abergavenny and nearby regional routes, including town travel, business mileage and onward local-regional journeys.",
          localRelevanceDescription: `Abergavenny is a strong fit for compact car hire because local driving often means weaving between Castle Street, the market area, Abergavenny station and short-stop town parking before widening out onto the A40 or A465. A smaller vehicle is useful for those ordinary local movements while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Abergavenny driving", body: `Compact cars are useful in Abergavenny because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Abergavenny trips can quickly widen beyond local roads into larger regional mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Abergavenny bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Abergavenny?", answer: "Compact cars are a practical option in Abergavenny because they stay easy for local driving and parking while remaining comfortable enough for wider regional mileage." },
            { question: "Is compact car hire in Abergavenny useful for town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Abergavenny journeys." },
            { question: "Do you offer automatic compact cars in Abergavenny?", answer: "Yes, subject to availability. If you prefer automatic driving for Abergavenny traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Abergavenny?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Abergavenny." },
            { question: "Can Abergavenny compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Abergavenny booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location5Tokens = createNearbyLocationTokens({
          location: "Chepstow",
          heroImage: "/images/compactcarhirenewport-co-uk-nearby-location-fleet-a.png",
          heroAlt: "Compact hire car ready for practical travel around Chepstow",
          metadataDescription: "Compact car hire in Chepstow for local driving, work trips and practical regional mileage.",
          heroDescription: "Compact car hire in Chepstow for everyday local travel, appointments and wider mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Chepstow works well because local bookings often mix ordinary town movement with wider regional mileage in the same booking. A smaller hatchback is easier for day-to-day parking and shorter local stops, while still remaining comfortable enough for broader routes later in the day.

That practicality suits replacement transport, work visits, family mileage and mixed-use journeys around Chepstow. You get a self-drive car that stays manageable locally without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Chepstow compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Chepstow and nearby regional routes, including town travel, business mileage and onward local-regional journeys.",
          localRelevanceDescription: `Chepstow is a strong fit for compact car hire because local driving often moves between High Street, Chepstow station, riverside and castle-side stops before widening onto the A48 or M48. A smaller vehicle is useful for those ordinary parking decisions while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Chepstow driving", body: `Compact cars are useful in Chepstow because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Chepstow trips can quickly widen beyond local roads into larger regional mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Chepstow bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Chepstow?", answer: "Compact cars are a practical option in Chepstow because they stay easy for local driving and parking while remaining comfortable enough for wider regional mileage." },
            { question: "Is compact car hire in Chepstow useful for town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Chepstow journeys." },
            { question: "Do you offer automatic compact cars in Chepstow?", answer: "Yes, subject to availability. If you prefer automatic driving for Chepstow traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Chepstow?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Chepstow." },
            { question: "Can Chepstow compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Chepstow booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location6Tokens = createNearbyLocationTokens({
          location: "Monmouth",
          heroImage: "/images/compactcarhirenewport-co-uk-nearby-location-fleet-b.png",
          heroAlt: "Compact hire car ready for practical travel around Monmouth",
          metadataDescription: "Compact car hire in Monmouth for local driving, work trips and practical regional mileage.",
          heroDescription: "Compact car hire in Monmouth for everyday local travel, appointments and wider mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Monmouth works well because local bookings often mix ordinary town movement with wider regional mileage in the same booking. A smaller hatchback is easier for day-to-day parking and shorter local stops, while still remaining comfortable enough for broader routes later in the day.

That practicality suits replacement transport, work visits, family mileage and mixed-use journeys around Monmouth. You get a self-drive car that stays manageable locally without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Monmouth compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Monmouth and nearby regional routes, including town travel, business mileage and onward local-regional journeys.",
          localRelevanceDescription: `Monmouth is a strong fit for compact car hire because local journeys often move around Monnow Street, the bus station side of town, retail stops and tight central parking before widening onto the A40 or A449. A smaller vehicle is useful for those repeated local movements while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Monmouth driving", body: `Compact cars are useful in Monmouth because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Monmouth trips can quickly widen beyond local roads into larger regional mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Monmouth bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Monmouth?", answer: "Compact cars are a practical option in Monmouth because they stay easy for local driving and parking while remaining comfortable enough for wider regional mileage." },
            { question: "Is compact car hire in Monmouth useful for town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Monmouth journeys." },
            { question: "Do you offer automatic compact cars in Monmouth?", answer: "Yes, subject to availability. If you prefer automatic driving for Monmouth traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Monmouth?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Monmouth." },
            { question: "Can Monmouth compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Monmouth booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location7Tokens = createNearbyLocationTokens({
          location: "Caerphilly",
          heroImage: "/images/compactcarhirenewport-co-uk-nearby-location-fleet-a.png",
          heroAlt: "Compact hire car ready for practical travel around Caerphilly",
          metadataDescription: "Compact car hire in Caerphilly for local driving, work trips and practical regional mileage.",
          heroDescription: "Compact car hire in Caerphilly for everyday local travel, appointments and wider mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Caerphilly works well because local bookings often mix ordinary town movement with wider regional mileage in the same booking. A smaller hatchback is easier for day-to-day parking and shorter local stops, while still remaining comfortable enough for broader routes later in the day.

That practicality suits replacement transport, work visits, family mileage and mixed-use journeys around Caerphilly. You get a self-drive car that stays manageable locally without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Caerphilly compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Caerphilly and nearby regional routes, including town travel, business mileage and onward local-regional journeys.",
          localRelevanceDescription: `Caerphilly is a strong fit for compact car hire because local trips often involve Caerphilly station, the castle area, town-centre stops and short parking movements before widening onto the A468 or A469. A smaller vehicle is useful for those repeat local errands while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Caerphilly driving", body: `Compact cars are useful in Caerphilly because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Caerphilly trips can quickly widen beyond local roads into larger regional mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Caerphilly bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Caerphilly?", answer: "Compact cars are a practical option in Caerphilly because they stay easy for local driving and parking while remaining comfortable enough for wider regional mileage." },
            { question: "Is compact car hire in Caerphilly useful for town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Caerphilly journeys." },
            { question: "Do you offer automatic compact cars in Caerphilly?", answer: "Yes, subject to availability. If you prefer automatic driving for Caerphilly traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Caerphilly?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Caerphilly." },
            { question: "Can Caerphilly compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Caerphilly booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

        const location8Tokens = createNearbyLocationTokens({
          location: "Blackwood",
          heroImage: "/images/compactcarhirenewport-co-uk-nearby-location-fleet-b.png",
          heroAlt: "Compact hire car ready for practical travel around Blackwood",
          metadataDescription: "Compact car hire in Blackwood for local driving, work trips and practical regional mileage.",
          heroDescription: "Compact car hire in Blackwood for everyday local travel, appointments and wider mileage where a smaller hatchback stays easy to manage.",
          serviceDescription: `Compact car hire in Blackwood works well because local bookings often mix ordinary town movement with wider regional mileage in the same booking. A smaller hatchback is easier for day-to-day parking and shorter local stops, while still remaining comfortable enough for broader routes later in the day.

That practicality suits replacement transport, work visits, family mileage and mixed-use journeys around Blackwood. You get a self-drive car that stays manageable locally without feeling limited once the route widens.`,
          whyChooseDescription: "We keep Blackwood compact car hire practical for ordinary local use while making sure the vehicle also works well once the journey opens onto wider routes.",
          serviceAreasDescription: "We support compact car hire in Blackwood and nearby regional routes, including town travel, business mileage and onward local-regional journeys.",
          localRelevanceDescription: `Blackwood is a strong fit for compact car hire because local travel often means short runs around High Street, Blackwood retail stops, health appointments and ordinary town parking before widening onto the A467 for broader valley mileage. A smaller vehicle is useful for those repeat local errands while still remaining comfortable enough once the booking heads beyond town.

That balance matters on bookings that mix shopping, appointments, family visits and regional travel in the same day. Compact hatchbacks stay practical in both halves of that journey.`,
          localBlocks: [
            { title: "A practical fit for everyday Blackwood driving", body: `Compact cars are useful in Blackwood because they keep local manoeuvring, regular parking and short town-centre trips simple. That is often the clearest benefit for customers who just need a sensible self-drive car.

A smaller hatchback also feels less cumbersome on repeated local stops than a larger vehicle.` },
            { title: "Comfortable enough once the route widens", body: `Blackwood trips can quickly widen beyond local roads into larger regional mileage, so the car still needs to remain practical after the town section.

A compact hatchback gives you that useful balance without pushing you into unnecessary size.` },
            { title: "Good for work, visits and replacement use", body: `Many Blackwood bookings are about business appointments, family visits or keeping daily routines moving while your own car is unavailable.

Compact hire works well in those situations because it stays easy to live with throughout the day.` },
          ],
          faqs: [
            { question: "Why choose compact car hire in Blackwood?", answer: "Compact cars are a practical option in Blackwood because they stay easy for local driving and parking while remaining comfortable enough for wider regional mileage." },
            { question: "Is compact car hire in Blackwood useful for town travel?", answer: "Yes. Compact cars are well suited to the short local trips, everyday parking and ordinary retail or appointment travel that make up many Blackwood journeys." },
            { question: "Do you offer automatic compact cars in Blackwood?", answer: "Yes, subject to availability. If you prefer automatic driving for Blackwood traffic or wider local routes, ask when booking." },
            { question: "Can I use a compact hire car for business travel in Blackwood?", answer: "Yes. Compact cars are commonly used for meetings, visits and practical day-to-day professional mileage in and around Blackwood." },
            { question: "Can Blackwood compact car hire also suit longer trips?", answer: "Yes. Compact hatchbacks remain useful for mixed local and regional driving when you do not need a larger vehicle." },
            { question: "What if I later need more room?", answer: "If the Blackwood booking later needs more room, the wider fleet includes larger cars, vans, minibuses and trucks." },
          ],
        })

export const servicePages: Record<ServiceSlug, ServicePageContent> = {
  "compact-car": createContentSet({
    tokens: homepageTokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "main-flow-vehicles",
    currentLocationName: siteConfig.locationName,
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  "van-hire": createContentSet({
    tokens: vanHireTokens,
    mainVehicleNames: vanMainNames,
    mainVehicleImages: vanMainImages,
    inventorySectionId: "van-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
  "truck-hire": createContentSet({
    tokens: truckHireTokens,
    mainVehicleNames: truckMainNames,
    mainVehicleImages: truckMainImages,
    inventorySectionId: "truck-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
  "minibus-hire": createContentSet({
    tokens: minibusHireTokens,
    mainVehicleNames: minibusMainNames,
    mainVehicleImages: minibusMainImages,
    inventorySectionId: "minibus-hire-vehicles",
    currentLocationName: siteConfig.locationName,
  }),
}

export const locationPageContents: Record<number, ServicePageContent> = {
  1: createContentSet({
    tokens: location1Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location1-vehicles",
    currentLocationName: "Cardiff",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  2: createContentSet({
    tokens: location2Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location2-vehicles",
    currentLocationName: "Cwmbran",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  3: createContentSet({
    tokens: location3Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location3-vehicles",
    currentLocationName: "Pontypool",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  4: createContentSet({
    tokens: location4Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location4-vehicles",
    currentLocationName: "Abergavenny",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  5: createContentSet({
    tokens: location5Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location5-vehicles",
    currentLocationName: "Chepstow",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  6: createContentSet({
    tokens: location6Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location6-vehicles",
    currentLocationName: "Monmouth",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  7: createContentSet({
    tokens: location7Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location7-vehicles",
    currentLocationName: "Caerphilly",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
  8: createContentSet({
    tokens: location8Tokens,
    mainVehicleNames: compactCarMainNames,
    mainVehicleImages: compactCarMainImages,
    inventorySectionId: "location8-vehicles",
    currentLocationName: "Blackwood",
    mainVehicleAction: true,
    additionalVehicleNames: compactCarAdditionalNames,
    additionalVehicleImages: compactCarAdditionalImages,
  }),
}