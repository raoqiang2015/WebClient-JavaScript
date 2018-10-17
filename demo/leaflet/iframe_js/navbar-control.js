/**显示地图*/
function init() {
//地图容器
var map = L.map('leaf_map', {
    //参考坐标系，默认是墨卡托坐标系（EPSG3857），EPSG4326为经纬度坐标系
    crs: L.CRS.EPSG4326,
    //显示中心
    center: [0, -90],
    //最小显示等级
    minZoom: 1,
    //最大显示等级
    maxZoom: 10,
    //当前显示等级
    zoom: 3,
    //不显示放大缩小按钮
    zoomControl:false,
    //限制显示地理范围
    maxBounds: L.latLngBounds(L.latLng(-180, -180), L.latLng(180, 180))
});
//显示OSM地图
var layer = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    //最小显示等级
    minZoom: 1,
    //最大显示等级
    maxZoom: 15,
    //设置地图不连续显示
    noWrap: true
}).addTo(map);
}
