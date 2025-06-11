// controllers/mediaController.js
const fetchFromReddit = require('../utils/redditFetcher');

const DEFAULT_SUBREDDITS = [
    'NatureIsLit',          // Stunning nature moments
    'Pics',                 // General high-quality photos
    'ITookAPicture',        // Amateur photography
    'PhotoCritique',        // Constructive photo feedback
    'AerialPhotos',         // Aerial photography
    'WaterScenes',          // Rivers, lakes, oceans
    'SkyViews',             // Vibrant skies
    'Landscapes',           // Breathtaking scenery
    'BotanicalBeauty',      // Plants and flowers
    'WildernessVibes',      // Untouched natural areas
    'UrbanExploration',     // Abandoned urban sites
    'StreetPhotography',    // Candid urban shots
    'MinimalPics',          // Minimalist photography
    'CozyPlaces',           // Warm, inviting interiors
    'RoomDesigns',          // Stylish home aesthetics
    'DesignInspiration',    // Beautiful design work
    'ArtGallery',           // High-quality artwork
    'ImaginaryCharacters',  // Fantasy character art
    'SpeculativeArt',       // Sci-fi and speculative art
    'CyberpunkAesthetic',   // Neon-lit urban futures
    'RetroFuturism',        // Vintage sci-fi visuals
    'VaporwaveVibes',       // Retro-digital art
    'OddlySatisfying',      // Visually pleasing moments
    'EyeBleach',            // Wholesome, calming images
    'BeautifulViews',       // Gorgeous scenery
    'TravelSnaps',          // Wanderlust-inducing shots
    'AdventureShots',       // Outdoor exploration
    'UnderwaterSnaps',      // Ocean and marine life
    'MacroPhotography',     // Close-up detailed shots
    'MicroWorlds',          // Tiny world photography
    'Astrophotography',     // Stars and galaxies
    'SpaceImages',          // Space exploration visuals
    'GeologySnaps',         // Rocks and minerals
    'FossilFinds',          // Ancient life visuals
    'WeatherSnaps',         // Storms and phenomena
    'CloudFormations',      // Unique cloud scenes
    'SunsetViews',          // Sunset photography
    'SunriseShots',         // Sunrise photography
    'NightSkySnaps',        // Starry night scenes
    'LightPainting',        // Creative light photography
    'LongExposureShots',    // Motion blur photography
    'BlackAndWhitePics',    // Monochrome photography
    'VintageSnaps',         // Historical images
    'OldSchoolCool',        // Retro stylish photos
    'PortraitSnaps',        // Artistic portraits
    'CandidMoments',        // Unposed photography
    'FoodSnaps',            // Culinary artistry
    'DessertDelights',      // Sweet treats visuals
    'CoffeeVibes',          // Coffee aesthetics
    'TeaCulture',           // Tea-related photos
    'BookNooks',            // Books and reading vibes
    'LibraryAesthetic',     // Beautiful libraries
    'MuseumSnaps',          // Artifacts and exhibits
    'HistoryImages',        // Historical moments
    'ArchaeologyFinds',     // Ancient ruins and artifacts
    'CastleViews',          // Majestic castles
    'AbandonedPlaces',      // Deserted locations
    'RuinedStructures',     // Decayed buildings
    'BridgeSnaps',          // Stunning bridges
    'TrainScenes',          // Trains and railways
    'CarScenes',            // Sleek automobiles
    'MotorcycleVibes',      // Motorcycles and rides
    'BicycleSnaps',         // Bikes and cycling
    'BoatScenes',           // Boats and yachts
    'AviationImages',       // Planes and aviation
    'MilitarySnaps',        // Military vehicles and gear
    'SteampunkArt',         // Victorian sci-fi art
    'FantasyArtwork',       // Mythical creatures and worlds
    'SurrealArtwork',       // Dreamlike art
    'AbstractArtworks',     // Non-representational art
    'PixelArtworks',        // Retro digital art
    'LowPolyArt',           // Geometric digital art
    'GlitchAesthetics',     // Distorted digital visuals
    'PsychedelicVibes',     // Colorful, trippy art
    'StreetArtSnaps',       // Murals and graffiti
    'TattooDesigns',        // Body art visuals
    'SculptureArt',         // 3D art forms
    'CeramicCreations',     // Pottery and clay work
    'WoodworkingCrafts',    // Crafted wood pieces
    'MetalworkArt',         // Forged metal creations
    'GardenBeauty',         // Lush gardens
    'BonsaiTrees',          // Miniature trees
    'TerrariumWorlds',      // Small ecosystems
    'AquariumLife',         // Underwater tank setups
    'ReefAquariums',        // Coral reef tanks
    'AnimalSnaps',          // Cute and wild animals
    'WholesomeAnimals',     // Adorable creatures
    'WildlifeSnaps',        // Animals in nature
    'BirdPhotography',      // Birds and avian beauty
    'MarineLifeSnaps',      // Ocean creatures
    'InsectPhotography',    // Bugs and critters
    'ReptileSnaps',         // Snakes, lizards, and more
    'MushroomSnaps',        // Fungi photography
    'LichenScenes',         // Lichen and moss
    'CactusGarden',         // Desert plants
    'SucculentSnaps',       // Juicy plants
    'FlowerPhotography',    // Blooming flowers
    'TreeSnaps',            // Majestic trees
    'ForestScenes',         // Woodland photography
    'JungleVibes',          // Tropical rainforests
    'DesertScenes',         // Arid landscapes
    'MountainViews',        // Rugged peaks
    'VolcanoSnaps',         // Volcanic landscapes
    'GlacierViews',         // Ice and snow
    'AuroraSnaps',          // Northern lights
    'RainbowViews',         // Colorful skies
    'FoggyScenes',          // Misty landscapes
    'FireSnaps',            // Flames and embers
    'LightningShots',       // Stormy strikes
    'CityViews',            // Urban skylines
    'VillageSnaps',         // Quaint rural towns
    'CemeteryScenes',       // Gravestones and memorials
    'ChurchArchitecture',   // Ornate religious buildings
    'MosqueArchitecture',   // Islamic architecture
    'TempleSnaps',          // Eastern temples
    'MonasteryViews',       // Secluded retreats
    'LighthouseSnaps',      // Coastal beacons
    'WindmillViews',        // Windmills and fields
    'BarnScenes',           // Rustic barns
    'CottageAesthetic',     // Cozy rural vibes
    'FarmLifeSnaps',        // Agricultural life
    'VineyardViews',        // Wine country scenes
    'OrchardSnaps',         // Fruit tree groves
    'StreetlightSnaps',     // Urban lighting
    'PublicTransitPics',    // Buses, trams, and metros
    'NightCitySnaps',       // City lights at night
    'UrbanGreenery',        // City plants and parks
    'SkateboardSnaps',      // Skateboarding photography
    'SurfingShots',         // Ocean waves and surfers
    'SnowyScenes',          // Winter landscapes
    'AutumnVibes',          // Fall foliage
    'SpringSnaps',          // Seasonal renewal
    'SummerViews',          // Sunny days
    'CoastalLife',          // Coastal wildlife
    'LakeViews',            // Serene lakes
    'RiverSnaps',           // Flowing rivers
    'WaterfrontViews',      // Scenic shorelines
    'CliffSnaps',           // Dramatic cliffs
    'CaveExploration',      // Underground wonders
    'HotAirBalloonSnaps',   // Colorful sky rides
];

exports.fetchMedia = async (req, res) => {
    const { subreddit, q, limit } = req.query;
    const count = parseInt(limit) || 1;
    const MAX_RETRIES = 10;
  
    const subredditsToTry = subreddit
      ? [subreddit]
      : [...DEFAULT_SUBREDDITS].sort(() => Math.random() - 0.5); // Shuffle
  
    let tried = 0;
  
    for (const sub of subredditsToTry) {
      if (tried >= MAX_RETRIES) break;
  
      try {
        const mediaItems = await fetchFromReddit(sub, q, count);
        if (mediaItems.length > 0) {
          return res.json(mediaItems);
        }
      } catch (err) {
        console.warn(`Failed to fetch from r/${sub}: ${err.message}`);
      }
  
      tried++;
    }
  
    // If all attempts fail
    res.status(404).json({ error: 'No media could be fetched from any subreddit' });
  };
  