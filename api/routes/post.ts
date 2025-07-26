import { Router } from "express";
import { validatePost } from "../middlewares/postValidation";
import { authenticateToken } from "../middlewares/authtenticatedToken";
import PostControllers from "../controllers/postControllers";
const router = Router();

//crear post dentro de una colección para un usuario
router.post("/create", validatePost, PostControllers.createPost);

//crear post sin colección asignada
router.post("/createOne", validatePost, PostControllers.onePost);

//asignar un post a una colección, si no la tiene
router.put("/updateOne", PostControllers.assingColletion);

//editar un post, cambiar titulo o descripción
router.put("/updatePost", PostControllers.updatePost);

//buscar un post por id
router.get("/findOne", PostControllers.findPost);

//todos los post de un usuario, con colecciones incluidas
router.get("/", authenticateToken, PostControllers.allPost);

//eliminar un post de un usuario
router.delete("/deletePost", PostControllers.deletePost);

export default router;
