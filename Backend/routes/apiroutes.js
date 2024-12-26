const router = require("express").Router()
const categoryController = require("../server/category/categoryController")
const subcategoryController = require("../server/subcategory/subcategoryController")
const productController = require("../server/product/productController")
const couponController = require("../server/coupon/couponController")
const cartController = require("../server/cart/cartController")
const orderController = require("../server/orders/orderController")

const userController = require("../server/user/userController")


const multer = require('multer')

//diskstorage start
const categorystorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/category')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const categoryupload = multer({ storage: categorystorage })
//dislstorage end


//diskstorage start
const subcategorystorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/subcategory')
  },
  filename: function (req, file, cb) {
    // console.log(file)

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const subcategoryupload = multer({ storage: subcategorystorage })
//dislstorage end


//diskstorage start
const productstorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/product')
  },
  filename: function (req, file, cb) {
    // console.log(file)

    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const productupload = multer({ storage: productstorage })
//dislstorage end

app.get('/', (req, res) => {
  res.send('Welcome to the Cosmocollection Backend!');
});
router.post("/user/register",userController.register)
router.post("/user/login",userController.login)

router.post("/category/getall", categoryController.getalldata)
router.post("/category/getsingledata", categoryController.getsingledata)

router.post("/subcategory/getall", subcategoryController.getalldata)
router.post("/subcategory/getsingledata", subcategoryController.getsingledata)

router.post("/product/getall", productController.getalldata)
router.post("/product/getsingledata", productController.getsingledata)


router.use(require("../config/middleware"))

router.post("/user/dashboard",userController.dashboard)
router.post("/user/getall",userController.getall)
router.post("/user/changepassword",userController.changepassword)
router.post("/user/updateprofile",userController.updateuser)

router.post("/category/add", categoryupload.single('categoryImage'), categoryController.add)
router.post("/category/softdelete", categoryController.softdeleteData)
router.post("/category/update",categoryupload.single('categoryImage'), categoryController.updatedata)

router.post("/subcategory/add", subcategoryupload.single('subcategoryImage'), subcategoryController.add)
router.post("/subcategory/softdelete", subcategoryController.softdeleteData)
router.post("/subcategory/update",subcategoryupload.single('subcategoryImage'), subcategoryController.updatedata)

router.post("/product/add", productupload.single('productImage'), productController.add)
router.post("/product/softdelete", productController.softdeleteData)
router.post("/product/update",productupload.single('productImage'), productController.updatedata)

// router.get('/dashboard', dashboardController.dashboard)


router.post("/coupon/add", couponController.add)
router.post("/coupon/getall", couponController.getalldata)
router.post("/coupon/getsingledata", couponController.getsingledata)
router.post("/coupon/softdelete", couponController.softdeleteData)
router.post("/coupon/update", couponController.updatedata)

router.post("/cart/add", cartController.add)
router.post("/cart/getall", cartController.getalldata)
router.post("/cart/delete", cartController.deleteData)

router.post("/orders/add", orderController.add)
router.post("/orders/getall", orderController.getallData)
router.post("/orders/update", orderController.updateData)
router.post("/orders/delete", orderController.softdeleteData)


module.exports = router
