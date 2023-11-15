const Article = require("../models/article");
const slugify = require("slugify");

//exports middlewares: lógica de negocios
exports.create = async (req, res) => {
    try {
        console.log(req.body);
        req.body.slug = slugify(req.body.title);
        const NewArticle = await new Article(req.body).save(); 
        res.json(NewArticle);
    } catch (err) {
        res.status(400).json({
            err: err.message,
            code: err.code,
        });
    }
};

exports.articlesCount = async (req, res) => {
    let total = await Article.find({ status: "Active"}).estimatedDocumentCount().exec();
    res.json(total);
};

exports.listAll = async (req, res) =>{
    let articles =await Article.find({ status: "Active"}).limit(parseInt(req.params.count)).exec();
    res.json(articles);
};

exports.remove = async (req, res) =>{
    try{
        const deleted = await Article.findOneAndUpdate(
        {
            slug: req.params.slug
        },
        {
            status: "Inactive"
        },
        {
            new: true //devuelve el documento actualizado
        }
        ).exec();
        res.json(deleted);
    }catch (err){
        console.log(err);
        return res.status(400).send("Article deleted failed");
    }
};

exports.remove2 = async (req, res) =>{
    try{
        const deleted = await Article.findOneAndRemove(
        {
            slug: req.params.slug
        },      
      
        ).exec();
        res.json(deleted);
    }catch (err){
        console.log(err);
        return res.status(400).send("Article deleted failed");
    }
};

exports.read = async (req, res) => {
    const article = await Article.findOne({slug: req.params.slug, status: "Active"}).exec();
    res.json(article);
};

exports.update = async (req, res)=>{
    try {
        if(req.body.title){
            req.body.slug = slugify(req.body.title);
        }
        const updated =  await Article.findOneAndUpdate(
            { slug:req.params.slug },
            req.body,
            {new :true}
        ).exec();
        res.json(updated);
    } catch (err) {
        console.log(err);
        return res.status(400).send("Article update fail");
    }
};