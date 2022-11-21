import { getConnection } from "../database/database";

const getProducts = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, description, price, image FROM products");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT id, name, description, price, image FROM products WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addProduct = async (req, res) => {
    try {
        const { name, description, price, image } = req.body;

        if ( name === undefined || description === undefined || price === undefined || image === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const product = { name, description, price, image };
        const connection = await getConnection();
        await connection.query("INSERT INTO products SET ?", product);
        res.json({ message: "Product added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, image } = req.body;

        if (id === undefined || name === undefined || description === undefined || price === undefined || image === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const product = { name, description, price, image };
        const connection = await getConnection();
        const result = await connection.query("UPDATE products SET ? WHERE id = ?", [product, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM products WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const downloadFile = (req, res, next) => {
    res.download('src/public/logitech-g203.jpg', function(err){
        if (err) {
            next(err);
        }
    })
};

export const methods = {
    getProducts,
    getProduct,
    addProduct,
    updateProduct,
    deleteProduct,
    downloadFile
};
