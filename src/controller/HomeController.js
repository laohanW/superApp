import HomeMenuModel from '../model/HomeMenuModel';
import HomeRecommendModel from '../model/HomeRecommendModel';
import HomeDiscountModel from '../model/HomeDiscountModel';
var HomeController= {}
HomeController.getRecommendData=function(result,error)
{
	return HomeRecommendModel.find(result,error);
}
HomeController.getMenuData=function(result,error)
{
	return HomeMenuModel.find(result,error);
}
HomeController.getDiscountData=function(result,error)
{
	return HomeDiscountModel.find(result,error);
}

HomeController.setRecommendData=function(data)
{
	HomeRecommendModel.save(data);
}
HomeController.setMenuData=function(data)
{
	HomeMenuModel.save(data);
}
HomeController.setDiscountData=function(data)
{
	HomeDiscountModel.save(data);
}


export default HomeController;
