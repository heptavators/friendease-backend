import { Router } from 'express';
import { LocationController } from "../../controllers/Location";
import { LocationRepository } from "../../repositories/Location";
import { LocationService } from "../../services/Location";

const LocationRouter = Router();

const locationRepository = new LocationRepository();
const locationService = LocationService.getInstance(locationRepository);

const locationController = new LocationController(locationService);

LocationRouter.get("/location", async (req, res) => locationController.GetAllLocationController(req, res));

export default LocationRouter