import HomeMenuModel from '../model/HomeMenuModel';
import HomeRecommendModel from '../model/HomeRecommendModel';
import HomeDiscountModel from '../model/HomeDiscountModel';
var HomeController= {}
HomeController.getRecommendData=function()
{
	return HomeRecommendModel.find();
}
HomeController.getMenuData=function()
{
	return HomeMenuModel.find();
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
