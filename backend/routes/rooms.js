const express = require("express") ;

const { createRoom, updateRoom, deleteRoom, getRoom, getRooms } = require("../controllers/room");
const { verifyAdmin } = require("../utils/verifyToken");
const router = express.Router() ;

//create
 router.post("/:hotelid",verifyAdmin,createRoom) ;
//update
router.put("/:id",verifyAdmin,updateRoom) ;
//delete
router.delete("/:id/:hotelid",verifyAdmin,deleteRoom) ;
//get
router.get("/:id",getRoom)
//get all
router.get("/",getRooms)


module.exports = router ;