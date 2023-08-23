const Product=require("../models/product");

const getAllProducts=async(req,res)=>{
    const {company,name,featured,sort,select}=req.query;
    const queryObject={};

    if(company)
    {
        queryObject.company=company;
    }
    if(featured)
    {
        queryObject.featured=featured;
    }
    if(name)
    {
        queryObject.name={$regex: name, $options:"i"};
    }
    let apiData=Product.find(queryObject);
    if(sort)
    {
        let sortFix= sort.split(",").join(" ");
        apiData=apiData.sort(sortFix);
    }

    if(select)
    {
        //let selectFix= select.replace(","," ");
        let selectFix= select.split(",").join(" ");
        apiData=apiData.select(selectFix);
    }

    //this is code for pagination
    // let page=Number(req.query.page) || 1;
    // let limit= Number(req.query.limit) || 3;
    // let skip=(page-1)* limit;

    // apiData=apiData.skip(skip).limit(limit);

    
    const MyProducts=await apiData;
  //  const getResult=await Product.find(queryObject);
    res.status(200).json({MyProducts});


    //db.products.find( { description: { $regex: /m.*line/, $options: 'si' } } )

};

const getAllProductsTesting=async(req,res)=>{
    const getResult=await Product.find(req.query).sort("price"); //ascending order sort
    //this is the way to perform sort and select in mongoose
    //const getResult1=await Product.find(req.query).sort("-price");//descending order sort
    //const getResult1=await Product.find(req.query).sort("-price name");//descending order sort

       //const getResult1=await Product.find(req.query).select("price name");//descending order sort
    res.status(200).json({getResult});
};

module.exports={getAllProducts,getAllProductsTesting};