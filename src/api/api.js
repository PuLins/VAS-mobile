/* 
* @description: 后台数据接口配置中心 
* @author: wp 
* @update: wp (2017-05-27 10:55) 
*/
import axios from 'axios';
import Qs from 'qs';

let base = '/vasms-web';
            
//查询异常
export const gettest = params => {return axios.get(`${base}/api/v1/unify/unify/export?_viewName=RPT_FIN_STATEMENT`)};
// 登陆
export const requestLogin = params => { return axios.post(`${base}/login`, Qs.stringify(params)); };
/*导航树 json查询*/
export const currentResource = params => {return axios.get(`${base}/api/v1/sys/sysResourceInfo/currentResource`);};
/*导航树 json查询 end*/

//请求第三方token
export const getOrderOutInfo = params => {return axios.get(`${base}/gis/declaration`,{ params: params });};

export const getOrderOutInfos = params => {return axios.get(`${base}/gis/declarations`,{ params: params });};

export const getCityCarAddress = params => {return axios.get(`${base}/api/v1/figures/getCityCarAddress`)};
export const findCarAddressCount = params => {return axios.get(`${base}/api/v1/figures/findCarAddressCount`)};
/* -------------------------------------------------------------系统首页部分--------------------------------------------------------*/
export const regPushs = params => {return axios.get(`${base}/api/v1/sys/sysUserInfo/regPush`,{ params: params })};
//工作台
export const getCorListInfo = params => {return axios.get(`${base}/api/v1/figures/chartinformation`,{ params: params })};

//安装地址每月统计
export const getinstalldetailtotel = params => {return axios.get(`${base}/api/v1/figures/installdetailtotel`,{ params: params })};

//安装,维修,报单统计
export const findtotel = params => {return axios.get(`${base}/api/v1/figures/totel`,{ params: params })};
//分组类型列表查询
export const groupClass = params => {return axios.get(`${base}/api/v1/sys/sysDictionaryData/dictvalue/`+params.dictvalue,params)};
//车辆上线地址
export const getAddressListInfo = params => {return axios.get(`${base}/api/v1/instruct/Plat/address`)};
//获取每月报单数量
export const getDeclarationtotel = params => {return axios.get(`${base}/api/v1/figures/declarationtotel/?corpid=`+params.corpid,params)};

//员工驻地分布
export const getProvinceEmployeeCount = params => {return axios.get(`${base}/api/v1/org/employeeInfo/getProvinceEmployeeCount`)};

//万网体系内统计
export const getDaySystemWithin = params => {return axios.get(`${base}/api/v1/figures/getDaySystem?type=W`)};

//万网体系外统计
export const getDaySystemBroad = params => {return axios.get(`${base}/api/v1/figures/getDaySystem?type=B`)};

//万网体系内统计
export const getMontchRepairCount = params => {return axios.get(`${base}/api/v1/figures/getMontchRepairCount`,{ params: params })};


//库存设备量
export const getGroupInformation = params => {return axios.get(`${base}/api/v1/figures/getGroupInformation?groupid=`+params.groupid,params)};

//获取分组信息
export const getGroupInformationes = params => {return axios.get(`${base}/api/v1/figures/getGroupInformation`)};

//获取考勤信息
export const getAttendance = params => {return axios.get(`${base}/api/v1/figures/getWorkTimes?date=`+params.date,params)};

//文员派单详情
export const getAssignDetails = params => {return axios.get(`${base}/api/v1/figures/getAssignDetails?declaredate=`+params.declaredate+"&status="+params.status,params)};

//众汇体系安装完成量   拆除量
export const getZhSystem = params => {return axios.get(`${base}/api/v1/figures/getZhSystem?declaredate=`+params.declaredate+"&status="+params.status,params)};


//众汇体系,万网体系安装完成量 
export const getSystemAboutCount = params => {return axios.get(`${base}/api/v1/figures/getSystemAboutCount?declaredate=`+params.declaredate+"&status="+params.status,params)};



//设备上线情况统计
//export const getdailyonlines = params => {return axios.get(`${base}/api/v1/figures/getDailyonline`)};
export const getdailyonlines1 = params => {return axios.get(`${base}/api/v1/figures/getDailyonline`)};


//维修单数据统计
export const getCorpnameMontchRepairCount = params => {return axios.get(`${base}/api/v1/figures/getCorpnameMontchRepairCount`,{ params: params })};











//首页退出登陆接口
export const logout = params => {return axios.get(`${base}/api/v1/sys/sysUserInfo/logout`)};
//首页新闻中心列表
export const getoaDocdetailList = params => {return axios.get(`${base}/api/v1/oa/oaDocdetail`,{ params: params });};
//获取新闻详情
export const getoaDocdetailInfo = params => {return axios.get(`${base}/api/v1/oa/oaDocdetail/`+params.id,params);};
//首页三个bar的数据
export const getIndexBoxInfo = params => {return axios.get(`${base}/api/v1/sys/fpDataInfo/oiv/dt`);};
//首页每日订单分析
export const getOrderInfo = params => {return axios.get(`${base}/api/v1/sys/fpDataInfo/order`);};

//echarts图表数据接口
export const getoaHomeBarStartList = params => {return axios.get(`${base}/api/v1/busi/declareStatistics`,{ params: params });};
//echarts图表数据接口
export const getoaHomeBarEndList = params => {return axios.get(`${base}/api/v1/busi/declareStatistics?type=new_build_end`,{ params: params });};

//echart饼图数据展示数据接口
export const getDeclareStatistics = params => {return axios.get(`${base}/api/v1/busi/declareStatistics`,{ params: params });};
//修改密码
export const editPassword = params => {return axios.put(`${base}/api/v1/sys/sysUserInfo/resetPwd/`+params.id,params);};

//获取登录城市的当日限行尾数
export const limitlinedigit = params => {return axios.get(`${base}/api/v1/restriction/VehicleRestriction/getCurrentCityRestriction`,{ params: params });};

//根据ip获取城市
export const findipgetcity = params => {return axios.get(`${base}/api/v1/restriction/VehicleRestriction/getCity`)};

//获取android的二维码下载地址
export const getAndroidCode = params => {return axios.get(`${base}/versionInfo?packagename=com.wwgps.ect&versioncode=0&versiontype=4&showCount=1`,{withCredentials:true});};


// 记事本
export const getBookInfoList = params => {return axios.get(`${base}/api/v1/sys/Notepad/query/vw`, { params: params }); };

export const addBookInfo = params => {return axios.post(`${base}/api/v1/sys/Notepad/`, params ); };

export const modifyBookInfo = params => {return axios.put(`${base}/api/v1/sys/Notepad/`+params.id,params ); };

export const changeBookInfo = params => {return axios.post(`${base}/api/v1/sys/Notepad/`+params.id,params);};
// 筛选模糊查询接口
export const getBookInfoListSelect = params => {return axios.get(`${base}/api/v1/sys/Notepad/query/screen`, { params: params }); };
// 好友接口
export const getEmpInfoList = params => {return axios.get(`${base}/api/v1/org/corporateInfo/buddy/list/1`, { params: params }); };

/* -------------------------------------------------------------系统首页部分结束--------------------------------------------------------*/


//车辆信息管理接口
export const getCarsInfoList = params => {return axios.get(`${base}/api/v1/car/carsInfo/query/vw`, { params: params }); };

export const removeCarsInfo = params => {return axios.post(`${base}/api/v1/car/carsInfo/batch`,Qs.stringify(params));};

export const modifyCarsInfo = params => {return axios.put(`${base}/api/v1/car/carsInfo/`+params.id,params);};

export const addCarsInfo = params => {return axios.post(`${base}/api/v1/car/carsInfo`,params);};



/* -------------------------------------------------------------基础管理部分--------------------------------------------------------*/
//模糊查询车主相关信息
export const getEmployeeSearchInfoList = params => {return axios.get(`${base}/api/v1/car/ownerInfo/`, { params: params }); };
//车主信息管理接口
export const getOwnerInfoList = params => {return axios.get(`${base}/api/v1/car/ownerInfo/query/vw`, { params: params }); };

export const addOwnerInfo = params => {return axios.post(`${base}/api/v1/car/ownerInfo/`, params ); };

export const modifyOwnerInfo = params => {return axios.put(`${base}/api/v1/car/ownerInfo/`+params.id,params ); };

export const removeOwnerInfo = params => {return axios.post(`${base}/api/v1/car/ownerInfo/batch`,Qs.stringify(params));};
//查询车架号
export const getVehicleSearchInfoList = params => {return axios.get(`${base}/api/v1/car/vehicleInfo/`, { params: params }); };
/*车主搜索模糊查询接口*/
export const getSelectListOwner = params => {return axios.get(`${base}/api/v1/car/ownerInfo/query/like`, { params: params }); };
// 绑定车辆信息
export const getVehInfoList = params => {return axios.get(`${base}/api/v1/car/vehicleInfo/query/like`, { params: params }); };
// 详情全部信息
export const getMoreInfoList = params => {return axios.get(`${base}/api/v1/car/vehicleInfo/query/detail`, { params: params }); };



//车辆信息管理接口
export const getVehicleInfoList = params => {return axios.get(`${base}/api/v1/car/vehicleInfo/query/vw`, { params: params }); };

export const addVehicleInfo = params => {return axios.post(`${base}/api/v1/car/vehicleInfo`, params ); };

export const modifyVehicleInfo = params => {return axios.put(`${base}/api/v1/car/vehicleInfo/`+params.id,params ); };

export const removeVehicleInfo = params => {return axios.post(`${base}/api/v1/car/vehicleInfo/batch`,Qs.stringify(params));};
//获取车类型列表
// export const getVehList = params => {return axios.get(`${base}/api/v1/sys/sysDictionaryData?dicvalue=VehicleType`); };
//获取车类型列表——新接口
export const getVehList = params => {return axios.get(`${base}/api/v1/car/vehicleplatecolor/query`);};
//获取客户和银行列表
export const getCorpList = params => {return axios.get(`${base}/api/v1/org/corporateInfo?flag=万网公司`, { params: params }); };
// 获取车主信息
export const getOwnerIDList = params => {return axios.get(`${base}/api/v1/car/ownerInfo/`+params.id,params ); };
//根据车辆查询设备
export const getProductsInfoListOfVehicle = params => {return axios.get(`${base}/api/v1/car/vehicleInfo/query/products/`+params.vehicleid,params); };
//根据车辆更多信息 （车辆，车主，设备）
export const getMoreInfoofVehicle = params => {return axios.get(`${base}/api/v1/insur/insuranceInfo/query/getOtherInfo/`+params.vehicleid,params); };
/*车辆搜索模糊查询接口*/
export const getSelectListVeh = params => {return axios.get(`${base}/api/v1/car/vehicleInfo/query/like`, { params: params }); };
// 查询绑定设备和卡信息接口
export const getVehicleProd = params => {return axios.get(`${base}/api/v1/device/packInfo/query/like`, { params: params }); };
// 绑定设备接口
export const bandVehicleProd = params => {return axios.post(`${base}/api/v1/car/vehicleInfo/add/band`,params ); };
// 解绑设备接口
export const unBandVehicleProd = params => {return axios.post(`${base}/api/v1/car/vehicleInfo/Unbundling`,params ); };
// export const addNewOwner = params => {return axios.post(`${base}/api/v1/car/ownerInfo`, params ); };

//保单信息管理接口
export const getInsuranceInfoList = params => {return axios.get(`${base}/api/v1/insur/insuranceInfo/query/vw`, { params: params }); };

export const addInsuranceInfo = params => {return axios.post(`${base}/api/v1/insur/insuranceInfo`, params); };

export const modifyInsuranceInfo = params => {return axios.put(`${base}/api/v1/insur/insuranceInfo/`+params.id,params ); };

export const removeInsuranceInfo = params => {return axios.post(`${base}/api/v1/insur/insuranceInfo/batch`,Qs.stringify(params));};
// 获取关联详情接口
export const getProdInfoList = params => {return axios.get(`${base}/api/v1/insur/insuranceInfo/getProduct`, { params: params }); };
// 保单公司接口
export const getInCorpInfoList = params => {return axios.get(`${base}/api/v1/org/corporateInfo/query/vw?ctype=INSU`, { params: params }); };
/*保单搜索模糊查询接口*/
export const getSelectListInsu = params => {return axios.get(`${base}/api/v1/insur/insuranceInfo/query/like`, { params: params }); };

//设备信息管理接口
// export const getProductInfoList = params => {return axios.get(`${base}/api/v1/device/productInfo/equipment`, { params: params }); };
export const getProductInfoList = params => {return axios.get(`${base}/api/v1/device/productInfo/query/vw`, { params: params }); };

export const addProductInfo = params => {return axios.post(`${base}/api/v1/device/productInfo`, params ); };

export const modifyProductInfo = params => {return axios.put(`${base}/api/v1/device/productInfo/`+params.id,params ); };

export const removeProductInfo = params => {return axios.post(`${base}/api/v1/device/productInfo/batch`,Qs.stringify(params));};
//获取设备型号
export const getMoNameList = params => {return axios.get(`${base}/api/v1/device/productModel?prodcategory=E`); };
//获取库房名称列表
export const getStoNameList = params => {return axios.get(`${base}/api/v1/sto/storageInfo`, { params: params }); };
// 设备关联车辆接口
export const getProductOwnerList = params => {return axios.get(`${base}/api/v1/device/productInfo/query/otherInfo/`+ params.PRODID,params ); };
/*设备搜索模糊查询接口/绑定SIM卡、设备接口*/
export const getSelectListProd = params => {return axios.get(`${base}/api/v1/device/productInfo/query/like`, { params: params }); };
// 查设备和SIM卡
export const getAllProSimInfoList = params => {return axios.get(`${base}/api/v1/device/productInfo/getband`, { params: params }); };
// 绑卡接口
export const addUnbundleSIM = params => {return axios.post(`${base}/api/v1/device/packInfo/addUnbundle`, params ); };
// 解绑接口
export const cancelUnbundleSIM = params => {return axios.delete(`${base}/api/v1/device/packInfo/unbundle/`+ params.packID); };
// 查询当前登录员工的设备和卡
export const getStoProductInfoList = params => {return axios.get(`${base}/api/v1/device/productInfo/query/like/one`, { params: params }); };



//SIM信息管理接口
export const getSIMInfoList = params => {return axios.get(`${base}/api/v1/device/productInfo/simcard`, { params: params }); };

export const addSIMInfo = params => {return axios.post(`${base}/api/v1/device/productInfo`, params ); };

export const modifySIMInfo = params => {return axios.put(`${base}/api/v1/device/productInfo/`+params.id,params ); };

export const removeSIMInfo = params => {return axios.post(`${base}/api/v1/device/productInfo/batch`,Qs.stringify(params));};
//获取SIM卡型号
export const getSIMNameList = params => {return axios.get(`${base}/api/v1/device/productModel?prodcategory=C`); };
/*SIM搜索模糊查询接口*/
export const getSelectListSIM = params => {return axios.get(`${base}/api/v1/device/productInfo/query/like`, { params: params }); };


//组织管理接口
export const getCorporateInfoList = params => {return axios.get(`${base}/api/v1/org/corporateInfo/query/vw`, { params: params }); };

export const addCorporateInfo = params => {return axios.post(`${base}/api/v1/org/corporateInfo`, params ); };

export const modifyCorporateInfo = params => {return axios.put(`${base}/api/v1/org/corporateInfo/`+params.id,params ); };

export const removeCorporateInfo = params => {return axios.post(`${base}/api/v1/org/corporateInfo/batch`,Qs.stringify(params));};
// 获取父级公司名称列表
export const getParentInfoList = params => {return axios.get(`${base}/api/v1/org/corporateInfo`, { params: params }); };
//获取公司类型列表
export const getCorpType = params => {return axios.get(`${base}/api/v1/sys/sysDictionaryData?dicvalue=CorpType`, { params: params }); };
//获取公司名称列表
export const getCorpNameList = params => {return axios.get(`${base}/api/v1/org/corporateInfo/getAllCorpName`, { params: params }); };
//获取公司名称列表
export const getCorpNameInsuList = params => {return axios.get(`${base}/api/v1/org/corporateInfo?corptype=INSU`)};
//获取公司列表
export const searchCorpNameList = params => {return axios.get(`${base}/api/v1/org/corporateInfo`, { params: params }); };
/*组织搜索模糊查询接口*/
export const getSelectListCorp = params => {return axios.get(`${base}/api/v1/org/corporateInfo/query/like`, { params: params }); };


//部门管理接口
export const getDepartmentInfoList = params => {return axios.get(`${base}/api/v1/org/departmentInfo/query/vw`, { params: params }); };

export const addDepartmentInfo = params => {return axios.post(`${base}/api/v1/org/departmentInfo`, params); };

export const modifyDepartmentInfo = params => {return axios.put(`${base}/api/v1/org/departmentInfo/`+params.id,params ); };

export const removeDepartmentInfo = params => {return axios.post(`${base}/api/v1/org/departmentInfo/batch`,Qs.stringify(params));};
/*部门搜索模糊查询接口*/
export const getSelectListDept = params => {return axios.get(`${base}/api/v1/org/departmentInfo/query/like`, { params: params }); };
// 查询详细公司
export const getAllCorpList = params => {return axios.get(`${base}/api/v1/org/corporateInfo/query/IDAndName`, { params: params }); };

//分组信息管理接口
export const getGroupInfoList = params => {return axios.get(`${base}/api/v1/org/groupInfo/query/vw`, { params: params }); };
export const addGroupInfo = params => {return axios.post(`${base}/api/v1/org/groupInfo/addGroupAndEmp`, params); };
export const modifyGroupInfo = params => {return axios.put(`${base}/api/v1/org/groupInfo/updateTo/`+params.id,params ); };
//设置分组信息无效
export const SetStateGroupInfo = params => {return axios.put(`${base}/api/v1/org/groupInfo/`+params.id,params ); };
export const removeGroupInfo = params => {return axios.post(`${base}/api/v1/org/groupInfo/batch`,Qs.stringify(params));};
// 获取员工
export const getEmpsGroupList = params => {return axios.get(`${base}/api/v1/org/employeeInfo/getIDandName`, { params: params }); };
// 获取组人数信息
export const getEmpsList = params => {return axios.get(`${base}/api/v1/org/groupInfo/getEmps`, { params: params }); };
/*分组搜索模糊查询接口*/
export const getSelectListGroup = params => {return axios.get(`${base}/api/v1/org/groupInfo/query/like`, { params: params }); };
// 查询详细部门
export const getAllDeptList = params => {return axios.get(`${base}/api/v1/org/departmentInfo/query/IDAndName`, { params: params }); };
//根据员工userid获取员工姓名
export const getNamebyUserid = params =>{return axios.get(`${base}/api/v1/org/employeeInfo/getNameByUserid`, { params: params }); };


//岗位管理接口
export const getPositionInfoList = params => {return axios.get(`${base}/api/v1/org/positionInfo/query/vw`, { params: params }); };

export const addPositionInfo = params => {return axios.post(`${base}/api/v1/org/positionInfo/add`, params );};

export const modifyPositionInfo = params => {return axios.put(`${base}/api/v1/org/positionInfo/update/`+ params.id,params );};

export const removePositionInfo = params => {return axios.post(`${base}/api/v1/org/positionInfo/batch`,Qs.stringify(params));};
/*岗位搜索模糊查询接口*/
export const getSelectListPos = params => {return axios.get(`${base}/api/v1/org/positionInfo/query/like`, { params: params }); };


//员工管理接口
export const getEmployeeInfoList = params => {return axios.get(`${base}/api/v1/org/employeeInfo/query/vw`, { params: params }); };

export const addEmployeeInfo = params => {return axios.post(`${base}/api/v1/org/employeeInfo/add`, params); };

export const modifyEmployeeInfo = params => {return axios.put(`${base}/api/v1/org/employeeInfo/`+params.id,params ); };

export const removeEmployeeInfo = params => {return axios.post(`${base}/api/v1/org/employeeInfo/batch`,Qs.stringify(params));};
//获取员工类型
export const getEmpType = params => {return axios.get(`${base}/api/v1/sys/sysDictionaryData?dicvalue=EmployeeType`); };
//获取员工有效职位列表
export const getPosList = params => {return axios.get(`${base}/api/v1/org/positionInfo`,{ params: params }); };
//获取员工所属部门列表
export const getDeptList = params => {return axios.get(`${base}/api/v1/org/departmentInfo?dicvalue=DeptName`,{ params: params }); };
// 员工分组列表
export const getEmpGroupInfoList = params => {return axios.get(`${base}/api/v1/org/groupInfo/query/vw`, { params: params }); };
// 员工岗位列表
export const getPositionList = params => {return axios.get(`${base}/api/v1/org/positionInfo/query/vw`, { params: params }); };
//员工姓名接口
export const getDeptManagerInfoList = params => {return axios.get(`${base}/api/v1/org/employeeInfo/?showCount=10000`, { params: params }); };
// 员工排序
export const getSortList = params => {return axios.get(`${base}/api/v1/org/employeeInfo/sort`, { params: params }); };
// 有效无效
export const modifyEmployeeInfoStatus = params => {return axios.put(`${base}/api/v1/org/employeeInfo/disable/`+params.id,params ); };
// 员工搜索模糊查询接口
export const getSelectList = params => {return axios.get(`${base}/api/v1/org/employeeInfo/query/like`, { params: params }); };



//库房管理
export const getStorageInfoList = params => {return axios.get(`${base}/api/v1/sto/storageInfo/query/vw`, { params: params })};

export const addStorageInfo = params => {return axios.post(`${base}/api/v1/sto/storageInfo`, params)};

export const modifyStorageInfo = params => {return axios.put(`${base}/api/v1/sto/storageInfo/`+params.id,params) };

export const removeStorageInfo = params => {return axios.post(`${base}/api/v1/sto/storageInfo/batch`,Qs.stringify(params))};
// 上级库房下拉
export const getStorageInfoListSelect = params => {return axios.get(`${base}/api/v1/sto/storageInfo/query/vw`, { params: params })};
/*库房搜索模糊查询接口*/
export const getSelectListSto = params => {return axios.get(`${base}/api/v1/sto/storageInfo/query/like`, { params: params }); };


// 地址管理
export const getDeliveryAddressList = params => {return axios.get(`${base}/api/v1/sto/deliveryAddress/query/vwto`, { params: params })};

export const addDeliveryAddress = params => {return axios.post(`${base}/api/v1/sto/deliveryAddress/add`, params)};

export const modifyDeliveryAddress = params => {return axios.put(`${base}/api/v1/sto/deliveryAddress/update/`+params.id,params) };

export const removeDeliveryAddress = params => {return axios.post(`${base}/api/v1/sto/deliveryAddress/batch`,Qs.stringify(params))};
// 获取有效职位
export const getAllCorpAddress = params => {return axios.get(`${base}/api/v1/org/corporateInfo/getAllCorpName`,{ params: params })};
//地址管理
export const getDeliveryAddressListInfo = params => {return axios.get(`${base}/api/v1/sto/deliveryAddress`, { params: params }); };
/*地址搜索模糊查询接口*/
export const getSelectListAddr = params => {return axios.get(`${base}/api/v1/sto/deliveryAddress/query/like`, { params: params }); };



// 车型管理

//选中车型触发
export const selectedType = params => {return axios.get(`${base}/api/v1/car/VehicleconfigInfo/addVariable`,{ params: params })};

export const getVehTypeList = params => {return axios.get(`${base}/api/v1/car/VehicleconfigInfo`, { params: params })};

export const addVehType = params => {return axios.post(`${base}/api/v1/car/VehicleconfigInfo`, params)};

export const modifyVehType = params => {return axios.put(`${base}/api/v1/car/VehicleconfigInfo/`+params.id,params) };

export const removeVehType = params => {return axios.post(`${base}/api/v1/car/VehicleconfigInfo/batch`,Qs.stringify(params))};
/*设备类型搜索模糊查询接口*/
export const getSelectListVehType= params => {return axios.get(`${base}/api/v1/car/VehicleconfigInfo/query/like`, { params: params }); };
/* ----------------------------------------------------------基础管理部分结束------------------------------------------------------*/



/* -------------------------------------------------------------业务管理部分--------------------------------------------------------*/
//客户报单 获取启动表单接口
// export const runProc = params => {return axios.post(`${base}/api/v1/workflow/new_build/start`,params)}
export const runProc = params => {return axios.post(`${base}/external/new_build/start`,params)}

//客户报单 获取启动表单接口
export const getstartformInfoList = params => {return axios.get(`${base}/form/form-data?processDefinitionId=proc_new_build:13:295093`)}

//客户报单
export const getBusinessKey = params => {return axios.get(`${base}/api/v1/busi/declaration/new`)}

//客户报单 启动流程接口
export const startProc = params => {return axios.post(`${base}/runtime/process-instances`,params)}

//客户报单 根据当前流程id获取任务接口
export const getAssignmentId = params => {return axios.get(`${base}/runtime/tasks`,{params:params})}

//客户报单 获取报单表单流程接口
export const applyForm = params => {return axios.get(`${base}/form/form-data`,{params:params})};

//客户报单 处理流程接口
export const complete = params => {return axios.post(`${base}/runtime/tasks/`+params.taskId,params.form)};

//我的待办列表信息
export const getTodoInfoList = params => {return axios.get(`${base}/api/v1/workflow/new_build/tasks`,{ params: params })};
//我的待办 处理表单信息
export const getApprovaperList = params => {return axios.get(`${base}/form/form-data`,{ params: params })};


//我的待办 获取任务表单变量
export const getvariablesInfoList = params => {return axios.get(`${base}/runtime/tasks/`+params.taskId+`/variables?scope=global`,params)};

//根据任务id获取任务表单变量
export const getvariablesTaskInfoList = params => {return axios.get(`${base}/api/v1/workflow/new_build/declaration/`+params.taskId)};
//根据任务id获取任务表单变量（维修，拆除）
export const getvariablesSeaviceTaskInfoList = params => {return axios.get(`${base}/api/v1/workflow/vindicate/afterSale/`+params.taskId)};
//根据任务id获取任务表单变量
export const getvariablesTaskKeyInfoList = params => {return axios.get(`${base}/api/v1/workflow/new_build/declaration/key/`+params.taskId)};

//提交核单信息
export const addApprovaperVerify = params => {return axios.post(`${base}/api/v1/workflow/new_build/`+ params.taskId +`/verify`,params.properties)};
//提交派单信息
export const addApprovaperSend = params => {return axios.post(`${base}/api/v1/workflow/new_build/`+ params.taskId +`/send`,params.properties)};
//施工接单
export const addApprovaperWorkReceiveCl = params => {return axios.post(`${base}/api/v1/workflow/new_build/submit/`+ params.taskId,params.properties)};
//施工接单维修
export const addApprovaperVindicateCl = params => {return axios.post(`${base}/api/v1/workflow/vindicate/submit/`+ params.taskId,params.properties)};
//施工接单拆除
export const addApprovaperVindicate_removeCl = params => {return axios.post(`${base}/api/v1/workflow/vindicate_remove/submit/`+ params.taskId,params.properties)};
//提交施工接单信息
export const addApprovaperWorkReceive = params => {return axios.post(`${base}/api/v1/workflow/new_build/`+ params.taskId +`/work_receive`,params.properties)};
//提交设备安装信息
export const addApprovaperWork = params => {return axios.post(`${base}/api/v1/workflow/new_build/`+ params.taskId +`/work`,params.properties)};
//提交设备安装 安装位置信息
export const getInstallPositionCode = params => {return axios.get(`${base}/api/v1/sys/sysDictionaryData?dicvalue=InstallPositionCode`)};
//获取车辆上传图片位置，设备图片上传位置
export const getCarPicLocation = params => {return axios.get(`${base}/api/v1/sys/sysDictionaryData?dicvalue=PicType`)};
//提交售后审核信息
export const addApprovaperServiceVerify = params => {return axios.post(`${base}/api/v1/workflow/new_build/`+ params.taskId +`/service_verify`,params.properties)};
//提交保险信息
export const addApprovaperInsurance = params => {return axios.post(`${base}/api/v1/workflow/new_build/`+ params.taskId +`/insurance`,params.properties)};
//提交修改 报单信息
export const addApprovaperApply = params => {return axios.post(`${base}/api/v1/workflow/new_build/`+ params.taskId +`/apply`,params.properties)};
//报单查询
export const queryApprovaperInfo = params => {return axios.post(`${base}/query/process-instances`,params)};
//检查设备是否在线
export const cldeviceIsOnstate = params => {return axios.post(`/api/echebao/devicestatus`,params)};

//获取派单 安装小组
export const getPdInstallGroupList = params => {return axios.get(`${base}/api/v1/org/groupInfo`,{ params: params })};
//获取派单 安装人员
export const getPdInstallUserList = params => {return axios.get(`${base}/api/v1/org/empGroup/query/vw?isdelete=0`,{ params: params })};
//获取派单 安装人员
export const getCustoHistoryInfo = params => {return axios.get(`${base}/runtime/process-instances/`+params.processInstanceId+`/variables`,params)};
//我的待办每个状态数量统计
export const getFormCount = params => {return axios.get(`${base}/api/v1/workflow/new_build/tasks/count`,{ params: params })};
//我的待办待处理数量统计
export const getFormCountDb = params => {return axios.get(`${base}/api/v1/workflow/task/user/task/count`,{ params: params })};
//报单查询
export const queryApprovalperInfo = params => {return axios.get(`${base}/api/v1/busi/declaration/query/vw`,{ params: params })};

//报单查询 3维修 1,2拆除
export const queryApprovalperServiceInfo = params => {return axios.get(`${base}/api/v1/busi/afterSale/query/vw`,{ params: params })};

//我的已办
export const queryMyhandle = params => {return axios.get(`${base}/api/v1/workflow/task/my_his_task`,{ params: params })};

//我的请求
export const queryRequest = params => {return axios.get(`${base}/api/v1/workflow/task/my_apply`,{ params: params })};

//设备安装 设备查询
export const getMyDeviceInfo = params => {return axios.get(`${base}/api/v1/device/packInfo/vwto`,{ params: params })};
//拆除
export const startBackProc = params => {return axios.post(`${base}/api/v1/workflow/new_build_back/start`,params)};
export const submitBackProc = params => {return axios.post(`${base}/api/v1/workflow/new_build_back/submit/`+params.taskId,params)};
export const getBackFormInfo = params => {return axios.get(`${base}/api/v1/workflow/new_build_back/new_back/`+params.taskId)};

export const getSearchVinNum = params => {return axios.get(`${base}/api/v1/car/vehicleInfo/query/key/`+params.key)};

//拆除 根据车架号/车牌号查询车辆信息
export const getCidSearchDevice = params => {return axios.get(`${base}/api/v1/car/vehicleInfo/query/products/`+params.carid)};
// export const getCidSearchDevice = params => {return axios.get(`${base}/api/v1/car/vehicleInfo/query/devices/`+params.carid)};
//拆除订单启动
export const startVindicate_remove = params => {return axios.post(`${base}/api/v1/workflow/vindicate_remove/start`,params)};
//查询拆除异常
export const getRemoveTypeInfo = params => {return axios.get(`${base}/api/v1/sys/sysDictionaryData?dicvalue=RemoveType`)};
//查询拆除订单
export const getRemoveDeclaration = params => {return axios.get(`${base}/api/v1/busi/declaration`,{ params: params })};
//查询拆除订单对应设备
export const getRemovInstallDetail = params => {return axios.get(`${base}/api/v1/car/vehicleInfo/query/devices/`+params.carid+"?declarationid="+params.declarationid)};
//提交拆除订单信息
export const addApprovaperSendVindicateRmove = params => {return axios.post(`${base}/api/v1/workflow/vindicate_remove/submit/`+ params.taskId,params.properties)};
//修改安装信息
export const editAzPromodify = params => {return axios.post(`${base}/api/v1/busi/declaration/modify/installDetail`,params)};

//查询异常
export const getFaultcodeInfo = params => {return axios.get(`${base}/api/v1/sys/sysDictionaryData?dicvalue=FaultCode`)};
//维修订单启动
export const startVindicate = params => {return axios.post(`${base}/api/v1/workflow/vindicate/start`,params)};
//提交维修订单信息
export const addApprovaperSendVindicate = params => {return axios.post(`${base}/api/v1/workflow/vindicate/submit/`+ params.taskId,params.properties)};
//补传照片
export const busiPicture = params => {return axios.post(`${base}/api/v1/busi/busiPicture`,params)};

export const modifyBusiPicture = params => {return axios.put(`${base}/api/v1/busi/busiPicture`+params.id,params) };

export const removeBusiPicture = params => {return axios.post(`${base}/api/v1/busi/busiPicture/batch`,Qs.stringify(params))};
//修改订单信息篇 修改车辆信息
export const editVehicleInfo = params => {return axios.put(`${base}/api/v1/car/vehicleInfo/`+params.id,params)};
//修改订单信息篇 修改订单信息
export const editDeclarationInfo = params => {return axios.put(`${base}/api/v1/busi/declaration/`+params.id,params)};
//修改订单信息篇 修改车主信息
export const editOwnerInfo = params => {return axios.put(`${base}/api/v1/car/ownerInfo/`+params.id,params)};
//车型查询
export const getModelListInfo1 = params => {return axios.get(`${base}/api/v1/unify/unify/like`,{ params: params })};
//车型查询
export const getModelListInfo = params => {return axios.get(`${base}/api/v1/unify/unify`,{ params: params })};

//流程删除
export const deleteProcess = params => {return axios.get(`${base}/api/v1/workflow/process/del/`+params.id+"?reson="+params.reson,params)};
//获取操作记录
export const getOperationRecord = params => {return axios.get(`${base}/api/v1/workflow/process/his/tasks`,{ params: params })};

// 代理设置
export const getAgentList = params => {return axios.get(`${base}/api/v1/busi/AgentEmployee/query/vw`, { params: params })};

export const addAgent = params => {return axios.post(`${base}/api/v1/busi/AgentEmployee`, params)};

export const modifyAgent = params => {return axios.put(`${base}/api/v1/busi/AgentEmployee/`+params.id,params) };

export const removeAgent = params => {return axios.post(`${base}/api/v1/busi/AgentEmployee/batch`,Qs.stringify(params))};

/*代理设置搜索模糊查询接口*/
export const getSelectListAgent = params => {return axios.get(`${base}/api/v1/busi/AgentEmployee/query/like`, { params: params }); };


// 易盗车型管理
export const getEasyStealList = params => {return axios.get(`${base}/api/v1/car/easystolencarsInfo/query/vw`, { params: params })};

export const addEasySteal = params => {return axios.post(`${base}/api/v1/car/easystolencarsInfo`, params)};

export const modifyEasySteal = params => {return axios.put(`${base}/api/v1/car/easystolencarsInfo/`+params.id,params) };

export const removeEasySteal = params => {return axios.post(`${base}/api/v1/car/easystolencarsInfo/batch`,Qs.stringify(params))};
/*易盗车型搜索模糊查询接口*/
export const getSelectListEasySteal = params => {return axios.get(`${base}/api/v1/car/easystolencarsInfo/query/like`, { params: params }); };
// 获取品牌、车系、车型接口
export const getAllInfoList = params => {return axios.get(`${base}/api/v1/car/easystolencarsInfo/query/vw/vehicleClass/` + params.value,{ params: params });};
// 获取车型颜色接口
export const getAllColorList = params => {return axios.get(`${base}/api/v1/car/VehicleconfigInfo/query/color`,{ params: params });};
// 获取首字母接口到当前日止安装设备上线总数
export const getFirstcategoryList = params => {return axios.get(`${base}/api/v1/car/VehicleconfigInfo/query/class/firstcategory`,{ params: params });};

//获取设备列表
export const getMoreDeciceListInfo = params => {return axios.post(`${base}/api/v1/device/productInfo/query/batch`,Qs.stringify(params))};

// 绑定关系
export const getRelationshipList = params => {return axios.get(`${base}/api/v1/device/productInfo/query/like/prodBand`, { params: params })};
/*绑定关系搜索模糊查询接口*/
export const getSelectListRelationship = params => {return axios.get(`${base}/api/v1/car/easystolencarsInfo/query/like`, { params: params }); };


//新装补登
export const getorderSupperDevice = params => {return axios.get(`${base}/api/v1/device/packInfo/all/vw`, { params: params }); };

//新装补登 添加
export const addorderSupper = params => {return axios.post(`${base}/api/v1/busi/declaration/makeup/order`, params ); };

//新装补登修改
export const editorderSupperDevice = params => {return axios.put(`${base}/api/v1/busi/declaration/update/self/order`, params); };

//获取我的公司
export const getCopNameBy = params => {return axios.get(`${base}/api/v1/sys/userCorporateInfo/corp`,{ params: params })};


//设备类型查询
export const getProductModelClass = params => {return axios.get(`${base}/api/v1/device/productModel/prodmodel/class`, { params: params }); };
//我的补登
export const getMyNewsuppList = params => {return axios.get(`${base}/api/v1/busi/declaration/self/order`, { params: params }); };

/* ----------------------------------------------------------业务管理部分结束------------------------------------------------------*/



/* -------------------------------------------------------------库存管理部分--------------------------------------------------------*/
//查询当前用户是否有库存
export const queryEmpIs = params => {return axios.get(`${base}/api/v1/sto/storageInfo/findByEmpId`, { params: params })};
//收发货管理对应设备列表查询
export const getsfhProList = params => {return axios.get(`${base}/api/v1/sto/delivery/getProdPC`, { params: params })};
//发货管理
export const getdeliveryList = params => {return axios.get(`${base}/api/v1/sto/delivery/oneself`, { params: params })};
//收发货管理
export const getdeliveryListAll = params => {return axios.get(`${base}/api/v1/sto/delivery/query/vw`, { params: params })};
//收货
export const getdoneselfreciveList = params => {return axios.get(`${base}/api/v1/sto/delivery/oneselfrecive`, { params: params })};
export const adddelivery = params => {return axios.post(`${base}/api/v1/sto/delivery/sendpc`, params)};
export const getCurUserDeviceInfo = params => {return axios.get(`${base}/api/v1/device/productInfo/query/balance`, { params: params })};
// 发货的添加设备的查询
export const getSearchCurUserDeviceInfo = params => {return axios.get(`${base}/api/v1/device/productInfo/query/balance`, { params: params })};

export const modifyCurUserDeviceInfo = params => {return axios.put(`${base}/api/v1/sto/delivery/`+params.id,params)};
//物资入库
export const getStoInList = params => {return axios.get(`${base}/api/v1/sto/stoIn/query/vwto`, { params: params })};//前几项

export const modifyStoIn = params => {return axios.put(`${base}/api/v1/sto/stoIn/`+params.id,params) };

export const addDeviceStoIn = params => {return axios.post(`${base}/api/v1/sto/stoIn/add`,params)};

export const removeStoIn = params => {return axios.post(`${base}/api/v1/sto/stoIn/batch`,Qs.stringify(params))};
//设备类型
export const getDeviceTypeModel = params => {return axios.get(`${base}/api/v1/sys/sysDictionaryData/query/vw`, { params: params })};
//设备型号
export const getProductModel = params => {return axios.get(`${base}/api/v1/device/productModel`, { params: params })};
// 提交批量入库接口
export const submitUploadSuccess = params => {return axios.post(`${base}/api/v1/sto/stoIn/batch/add/`+params.batchno)};
// 取消批量入库接口
export const submitUploadCancel = params => {return axios.post(`${base}/api/v1/sto/stoIn/batch/cancle/`+params.batchno)};
//获取供应商列表
export const getSupplierInfo = params => {return axios.get(`${base}/api/v1/org/supplierInfo`,{ params: params })};
//获取设备信息
export const getDeviceList= params => {return axios.get(`${base}/api/v1/sto/stoIn/getProductTo`,{ params: params })};

//派单获取设备型号
export const getClerkProductModel = params => {return axios.get(`${base}/api/v1/device/productModel/prodmodel/model/`+params.empid, { params: params.class })};

export const getStoOutList = params => {return axios.get(`${base}/api/v1/sto/stoOut`, { params: params })};

export const addStoOut = params => {return axios.post(`${base}/api/v1/sto/stoOut`, params)};

export const modifyStoOut = params => {return axios.put(`${base}/api/v1/sto/stoOut/`+params.id,params) };

export const removeStoOut = params => {return axios.post(`${base}/api/v1/sto/stoOut/batch`,Qs.stringify(params))};

//仓库调拨
export const getWareHouseList = params => {return axios.get(`${base}/api/v1/sto/allocation/query/vw`, { params: params })};

export const addWareHouseList = params => {return axios.post(`${base}/api/v1/sto/allocation`, params)};

export const modifyWareHouseList = params => {return axios.put(`${base}/api/v1/sto/allocation`+params.id,params) };

export const removeWareHouseList = params => {return axios.post(`${base}/api/v1/sto/allocation/batch`,Qs.stringify(params))};
//库存查询
export const getStockList = params => {return axios.get(`${base}/api/v1/sto/balance/query/vw`, { params: params })};

//我的库存查询
export const getMyStockList = params => {return axios.get(`${base}/api/v1/sto/balance/oneself`, { params: params })};

export const addStockList = params => {return axios.post(`${base}/api/v1/sto/balance`, params)};

export const modifyStockList = params => {return axios.put(`${base}/api/v1/sto/balance/`+params.id,params) };

export const removeStockList = params => {return axios.post(`${base}/api/v1/sto/balance/batch`,Qs.stringify(params))};
//关联设备ID接口
// export const getProdIDInfoList = params => {return axios.get(`${base}/api/v1/device/productInfo/query/vw`, { params: params }); };
export const getProdIDInfoList = params => {return axios.get(`${base}/api/v1/device/productInfo/getProductTo`, { params: params }); };

// 库存明细详情接口
export const getMoreDataList = params => {return axios.get(`${base}/api/v1/device/productInfo/bund/`+params.id,params); };
// 解绑接口
export const cancelUnbundle = params => {return axios.delete(`${base}/api/v1/device/packInfo/unbundle/`+ params.packid); };


// 设备类型（保险设备）
export const getProductModelList = params => {return axios.get(`${base}/api/v1/device/productModel/query/vw`, { params: params })};

export const addProductModel = params => {return axios.post(`${base}/api/v1/device/productModel`, params)};

export const modifyProductModel = params => {return axios.put(`${base}/api/v1/device/productModel/`+params.id,params) };

export const removeProductModel = params => {return axios.post(`${base}/api/v1/device/productModel/batch`,Qs.stringify(params))};
/*设备类型搜索模糊查询接口*/
export const getSelectListProdModel = params => {return axios.get(`${base}/api/v1/device/productModel/query/like`, { params: params }); };


//获取物流信息
export const getLogistics = params => {return axios.get(`${base}/api/v1/other/logisticsInfo/delivery/`+params.id, { params: params }); };

//供应商管理
export const getSupplierList = params => {return axios.get(`${base}/api/v1/org/supplierInfo`, { params: params })};

export const addSupplier = params => {return axios.post(`${base}/api/v1/org/supplierInfo`, params)};

export const modifySupplier = params => {return axios.put(`${base}/api/v1/org/supplierInfo/`+params.id,params) };

export const removeSupplier = params => {return axios.post(`${base}/api/v1/org/supplierInfo/batch`,Qs.stringify(params))};
/*设备类型搜索模糊查询接口*/
export const getSelectListSupplier = params => {return axios.get(`${base}/api/v1/org/supplierInfo/query/like`, { params: params }); };


// 退回
export const backDelivery = params => {return axios.get(`${base}/api/v1/sto/delivery/sendBack`,{ params: params }); };
/* ----------------------------------------------------------库存管理部分结束------------------------------------------------------*/




/* -------------------------------------------------------------平台管理部分--------------------------------------------------------*/
// 通讯平台接口
export const getPlatList = params => {return axios.get(`${base}/api/v1/instruct/Plat/query/vw`, { params: params }); };

export const addPlat = params => {return axios.post(`${base}/api/v1/instruct/Plat`, params); };

export const modifyPlat = params => {return axios.put(`${base}/api/v1/instruct/Plat/`+params.id,params ); };

export const removePlat = params => {return axios.post(`${base}/api/v1/instruct/Plat/delete/plat`,Qs.stringify(params));};
/* 平台搜索模糊查询接口*/
export const getSelectListPlat = params => {return axios.get(`${base}/api/v1/instruct/Plat/query/like`, { params: params }); };


//设备接入接口
export const getPlatProdList = params => {return axios.get(`${base}/api/v1/instruct/Plat/query/prod/vw`, { params: params }); };

export const addPlatProd = params => {return axios.post(`${base}/api/v1/instruct/Plat/add`, params); };

export const modifyPlatProd = params => {return axios.put(`${base}/api/v1/instruct/Plat/update`,params); };

export const removePlatProd = params => {return axios.post(`${base}/api/v1/instruct/Plat/batch`,Qs.stringify(params));};
// 设备型号自动匹配设备编号
export const getProdList = params => {return axios.get(`${base}/api/v1/device/productInfo/query/vw`, { params: params }); };
/* 设备接入搜索模糊查询接口*/
export const getSelectPlatProdList = params => {return axios.get(`${base}/api/v1/instruct/Plat/query/prod/like`, { params: params }); };
// 详情获取绑定车辆信息
export const getProductOwnerListPlat = params => {return axios.get(`${base}/api/v1/device/productInfo/query/otherInfo`,params ); };

//短信发送接口
export const getMesgSendList = params => {return axios.get(`${base}/api/v1/instruct/Plat/query/sim/vw`, { params: params }); };
/* 短信发送搜索模糊查询接口*/
export const getSelectMesgSendList = params => {return axios.get(`${base}/api/v1/instruct/Plat/query/sim/like`, { params: params }); };


// 短信记录接口
export const getOrderLogList = params => {return axios.get(`${base}/api/v1/instruct/orderLog`, { params: params }); };

export const sendOrderLog = params => {return axios.post(`${base}/api/v1/instruct/orderLog`, params); };

export const modifyOrderLog = params => {return axios.put(`${base}/api/v1/instruct/orderLog`+params.id,params ); };

export const removeOrderLog = params => {return axios.post(`${base}/api/v1/instruct/orderLog/batch`,Qs.stringify(params));};
/* 短信记录搜索模糊查询接口*/
export const getSelectOrderLogList = params => {return axios.get(`${base}/api/v1/instruct/orderLog/query/like`, { params: params }); };

// 短信设置接口
export const getOrderList = params => {return axios.get(`${base}/api/v1/instruct/Order`, { params: params }); };

export const addOrder = params => {return axios.post(`${base}/api/v1/instruct/Order`, params); };

export const modifyOrder = params => {return axios.put(`${base}/api/v1/instruct/Order`+params.id,params ); };

export const removeOrder = params => {return axios.post(`${base}/api/v1/instruct/Order/batch`,Qs.stringify(params));};
/* 短信设置搜索模糊查询接口*/
export const getSelectOrderList = params => {return axios.get(`${base}/api/v1/instruct/Order/query/like`, { params: params }); };



// 上线设备接口
export const getOnlineList = params => {return axios.post(`/api/echebao/alldevicestatus`,params ); };//王尚昕接口
// 上线设备(二)
export const getOnlineListVAS = params => {return axios.get(`${base}/api/v1/device/onlineCheck/vehicle/position`, { params: params }); };
// 上线设备(二)——模糊查询
export const getOnlineListVASSelect = params => {return axios.get(`${base}/api/v1/device/onlineCheck/select/online`, { params: params }); };



// IOCP接口
export const getOnlineIpList = params => {return axios.post(`/api/echebao/checkoriginal`,params ); };

/* ----------------------------------------------------------平台管理部分结束------------------------------------------------------*/




/* -------------------------------------------------------------财务管理部分--------------------------------------------------------*/
//执行记录
export const getHistoryTable = params => {return axios.get(`${base}/api/v1/unify/unify?_viewName=VAS_FIN_EXECRECORD`, { params: params }); };
// 异动表 接口
export const getTransList = params => {return axios.get(`${base}/api/v1/unify/unify?_viewName=RPT_FIN_DIFF`, { params: params }); };

// 成本汇总表 接口
export const getCostList = params => {return axios.get(`${base}/api/v1/unify/unify?_viewName=RPT_FIN_COST`, { params: params }); };

// 对账表 接口
export const getRecList = params => {return axios.get(`${base}/api/v1/unify/unify?_viewName=RPT_FIN_STATEMENT`, { params: params }); };

// 收入汇总 接口
export const getIncomeList = params => {return axios.get(`${base}/api/v1/unify/unify?_viewName=RPT_FIN_REVENUE`, { params: params }); };

// 异动表 接口
export const getTransListExport = params => {return axios.get(`${base}/api/v1/unify/unify/export?_viewName=RPT_FIN_DIFF`, { params: params }); };

// 成本汇总表 接口
export const getCostListExport = params => {return axios.get(`${base}/api/v1/unify/unify/export?_viewName=RPT_FIN_COST`, { params: params }); };

// 对账表 接口
export const getRecListExport = params => {return axios.get(`${base}/api/v1/unify/unify/export?_viewName=RPT_FIN_STATEMENT`, { params: params }); };

// 收入汇总 接口
export const getIncomeListExport = params => {return axios.get(`${base}/api/v1/unify/unify/export?_viewName=RPT_FIN_REVENUE`, { params: params }); };
//执行记录
export const implement = params => {return axios.get(`${base}/api/v1/unify/unify/callp`, { params: params }); };
//查询财务表信息
export const searchUnify = params => {return axios.get(`${base}/api/v1/unify/unify`, { params: params }); };

/* ----------------------------------------------------------财务管理部分结束------------------------------------------------------*/





/* -------------------------------------------------------------系统管理部分--------------------------------------------------------*/
//用户信息管理接口
export const getSysUserInfoList = params => {return axios.get(`${base}/api/v1/sys/sysUserInfo`, { params: params }); };

export const addSysUserInfo = params => {return axios.post(`${base}/api/v1/sys/sysUserInfo`, params); };

export const modifySysUserInfo = params => {return axios.put(`${base}/api/v1/sys/sysUserInfo/`+params.id,params ); };

export const removeSysUserInfo = params => {return axios.post(`${base}/api/v1/sys/sysUserInfo/batch`,Qs.stringify(params));};
// 查询
export const getSysUserList = params => {return axios.get(`${base}/api/v1/sys/sysUserInfo`, { params: params }); };
// 车辆权限——查询组织已有车辆
export const getHaveVehList = params => {return axios.get(`${base}/api/v1/sys/shareVehicleInfo/query/vehicleInfos/`+params.usercorpid,params); };
// 车辆权限——编辑组织已有车辆
export const modifyHaveVehList = params => {return axios.post(`${base}/api/v1/sys/shareVehicleInfo/modify/corp/vehicles`,params); };


//角色信息管理接口
export const getSysRoleInfoList = params => {return axios.get(`${base}/api/v1/sys/sysRoleInfo`, { params: params }); };

export const addSysRoleInfo = params => {return axios.post(`${base}/api/v1/sys/sysRoleInfo`, params); };

export const modifySysRoleInfo = params => {return axios.put(`${base}/api/v1/sys/sysRoleInfo/`+params.id,params ); };

export const removeSysRoleInfo = params => {return axios.post(`${base}/api/v1/sys/sysRoleInfo/batch`,Qs.stringify(params));};

//资源信息管理接口
export const getSysResourceInfoList = params => {return axios.get(`${base}/api/v1/sys/sysResourceInfo`, { params: params }); };

export const addSysResourceInfo = params => {return axios.post(`${base}/api/v1/sys/sysResourceInfo`, params); };

export const modifySysResourceInfo = params => {return axios.put(`${base}/api/v1/sys/sysResourceInfo/`+params.id,params ); };

export const removeSysResourceInfo = params => {return axios.post(`${base}/api/v1/sys/sysResourceInfo/batch`,Qs.stringify(params));};

//字典管理接口
export const getSysDictionaryList = params => {return axios.get(`${base}/api/v1/sys/sysDictionary`, { params: params }); };

export const addSysDictionary = params => {return axios.post(`${base}/api/v1/sys/sysDictionary`, params); };

export const modifySysDictionary = params => {return axios.put(`${base}/api/v1/sys/sysDictionary/`+params.id,params ); };

export const removeSysDictionary = params => {return axios.post(`${base}/api/v1/sys/sysDictionary/batch`,Qs.stringify(params));};

//字典数据管理接口
export const getSysDictionaryDataList = params => {return axios.get(`${base}/api/v1/sys/sysDictionaryData`, { params: params })};

export const addSysDictionaryData = params => {return axios.post(`${base}/api/v1/sys/sysDictionaryData`, params)};

export const modifySysDictionaryData = params => {return axios.put(`${base}/api/v1/sys/sysDictionaryData/`+params.id,params) };

export const removeSysDictionaryData = params => {return axios.post(`${base}/api/v1/sys/sysDictionaryData/batch`,Qs.stringify(params))};

//流程数据映射表接口
export const getActVariableMappingList = params => {return axios.get(`${base}/api/v1/sys/actVariableMapping`, { params: params })};

export const addActVariableMapping = params => {return axios.post(`${base}/api/v1/sys/actVariableMapping`, params)};

export const modifyActVariableMapping = params => {return axios.put(`${base}/api/v1/sys/actVariableMapping/`+params.id,params) };

export const removeActVariableMapping = params => {return axios.post(`${base}/api/v1/sys/actVariableMapping/batch`,Qs.stringify(params))};

// 上传文件
export const getUploadFile = params => {return axios.get(`${base}/api/v1/imp/impTableDefine`)};

//接口管理接口
export const getInterfaceList = params => {return axios.get(`${base}/api/v1/sys/interfacesInfo/query`, { params: params })};

export const addInterface = params => {return axios.post(`${base}/api/v1/sys/interfacesInfo`, params)};

export const modifyInterface = params => {return axios.put(`${base}/api/v1/sys/interfacesInfo/`+params.id,params) };

export const removeInterface = params => {return axios.post(`${base}/api/v1/sys/interfacesInfo/batch`,Qs.stringify(params))};
// 参数接口
export const getInterfaceParaList = params => {return axios.get(`${base}/api/v1/sys/interfacesInfo/queryParam`, { params: params })};
/* 接口管理模糊查询接口*/
export const getSelectInterfaceList = params => {return axios.get(`${base}/api/v1/sys/interfacesInfo/query/like`, { params: params }); };


//角色资源编辑
export const editRuleResourceInfo = params => {return axios.post(`${base}/api/v1/sys/sysResourceRole`,params)}

export const getRuleResourceInfo = params => {return axios.get(`${base}/api/v1/sys/sysResourceRole`,{ params: params })}

//用户资源编辑
export const editUserRole = params => {return axios.post(`${base}/api/v1/sys/sysUserRole/`+params.userid,params.data)}

export const getUserRole = params => {return axios.get(`${base}/api/v1/sys/sysUserRole`,{ params: params })}

// 分组权限编辑
export const editGroupRole = params => {return axios.put(`${base}/api/v1/sys/sysUserInfo/groups`, params )};
// 查询所有分组接口
export const getGroupAllList = params => {return axios.get(`${base}/api/v1/org/groupInfo/query/level/1`,{ params: params })};
// 查询已有分组
export const getGroupThisList = params => {return axios.get(`${base}/api/v1/sys/sysUserInfo/groups/query/`+params.id,{ params: params })};



// 组织权限编辑
export const editCorpRole = params => {return axios.put(`${base}/api/v1/sys/sysUserInfo/corporates`,params)};
// 查询所有组织接口
export const getCorpAllList = params => {return axios.get(`${base}/api/v1/org/corporateInfo/query/level`,{ params: params })};
// 查询当前用户已选组织 接口
export const getThisCorpList = params => {return axios.get(`${base}/api/v1/sys/sysUserInfo/corporateInfo/query/`+params.userid,{ params: params })};


// 协议管理接口
export const getProtocolList = params => {return axios.get(`${base}/api/v1/sys/ProtocolInfo/`, { params: params })};

export const addProtocol = params => {return axios.post(`${base}/api/v1/sys/ProtocolInfo`, params)};

export const modifyProtocol = params => {return axios.put(`${base}/api/v1/sys/ProtocolInfo/`+params.id,params) };

export const removeProtocol = params => {return axios.post(`${base}/api/v1/sys/ProtocolInfo/batch`,Qs.stringify(params))};
/* 协议管理模糊查询接口*/
export const getSelectListProtocol = params => {return axios.get(`${base}/api/v1/sys/ProtocolInfo/query/like`, { params: params }); };


// 报警类型设置接口
export const getAlarmTypeList = params => {return axios.get(`${base}/api/v1/gis/Alarmtype/`, { params: params })};

export const addAlarmType = params => {return axios.post(`${base}/api/v1/gis/Alarmtype`, params)};

export const modifyAlarmType = params => {return axios.put(`${base}/api/v1/gis/Alarmtype/`+params.id,params) };

export const removeAlarmType = params => {return axios.post(`${base}/api/v1/gis/Alarmtype/batch`,Qs.stringify(params))};
/* 报警类型设置模糊查询接口*/
export const getSelectListAlarmType = params => {return axios.get(`${base}/api/v1/gis/Alarmtype/query/like`, { params: params }); };


// 报警参数设置接口
export const getTerminalAlarmList = params => {return axios.get(`${base}/api/v1/gis/AlarmParam/query/vw`, { params: params })};

export const addTerminalAlarm = params => {return axios.post(`${base}/api/v1/gis/AlarmParam`, params)};

export const modifyTerminalAlarm = params => {return axios.put(`${base}/api/v1/gis/AlarmParam/`+params.id,params) };

export const removeTerminalAlarm = params => {return axios.post(`${base}/api/v1/gis/AlarmParam/batch`,Qs.stringify(params))};
/* 终端报警设置模糊查询接口*/
export const getSelectListTerminalAlarm = params => {return axios.get(`${base}/api/v1/gis/AlarmParam/query/like`, { params: params }); };


// 检测参数设置接口
export const getGisParamList = params => {return axios.get(`${base}/api/v1/sys/GisParam`, { params: params })};

export const addGisParam = params => {return axios.post(`${base}/api/v1/sys/GisParam`, params)};

export const modifyGisParam = params => {return axios.put(`${base}/api/v1/sys/GisParam/`+params.id,params) };

export const deleteGisParam = params => {return axios.put(`${base}/api/v1/sys/GisParam/state/`+params.id,params) };

export const removeGisParam = params => {return axios.post(`${base}/api/v1/sys/GisParam/batch`,Qs.stringify(params))};
/* 终端报警设置模糊查询接口*/
export const getSelectListGisParam = params => {return axios.get(`${base}/api/v1/sys/GisParam/query/like`, { params: params }); };


// 客户管理
export const getCustomerCorpList = params => {return axios.get(`${base}/api/v1/org/corporateInfo/query/customer`, { params: params })};
export const modifyCustomerCorp = params => {return axios.put(`${base}/api/v1/org/corporateInfo/update/customer`,params ) };


/* ----------------------------------------------------------系统管理部分结束------------------------------------------------------*/



/* -------------------------------------------------------------内容管理部分--------------------------------------------------------*/
//文章管理接口
export const getArtcileList = params => {return axios.get(`${base}/api/v1/cms/artcile/`, { params: params })};

export const addArtcile = params => {return axios.post(`${base}/api/v1/cms/artcile`, params)};

export const modifyArtcile = params => {return axios.put(`${base}/api/v1/cms/artcile/`+params.id,params) };

export const removeArtcile = params => {return axios.post(`${base}/api/v1/cms/artcile/batch`,Qs.stringify(params))};
// 详情——包含内容content
export const getArtcileListItem = params => {return axios.get(`${base}/api/v1/cms/artcile/`+params.id) };
/* 文章管理模糊查询接口*/
export const getSelectListArtcile = params => {return axios.get(`${base}/api/v1/cms/artcile/query/like`, { params: params }); };



//分类管理接口
export const getArtcileCategoryList = params => {return axios.get(`${base}/api/v1/cms/artcileCategory/`, { params: params })};

export const addArtcileCategory = params => {return axios.post(`${base}/api/v1/cms/artcileCategory`, params)};

export const modifyArtcileCategory = params => {return axios.put(`${base}/api/v1/cms/artcileCategory/`+params.id,params) };

export const removeArtcileCategory = params => {return axios.post(`${base}/api/v1/cms/artcileCategory/batch`,Qs.stringify(params))};



// 留言管理接口
/* ----------------------------------------------------------内容管理部分结束------------------------------------------------------*/




/* -------------------------------------------------------------考勤管理部分--------------------------------------------------------*/
//签到管理接口
export const getAttdrecordList = params => {return axios.get(`${base}/api/v1/att/attdrecord/query/vw`, { params: params })};

export const addAttdrecord = params => {return axios.post(`${base}/api/v1/att/attdrecord`, params)};

export const modifyAttdrecord = params => {return axios.put(`${base}/api/v1/att/attdrecord/`+params.id,params) };

export const removeAttdrecord = params => {return axios.post(`${base}/api/v1/att/attdrecord/batch`,Qs.stringify(params))};

//规则管理接口
export const getAttdRuleList = params => {return axios.get(`${base}/api/v1/att/attdRule/query/vwto`, { params: params })};

export const addAttdRule = params => {return axios.post(`${base}/api/v1/att/attdRule`, params)};

export const modifyAttdRule = params => {return axios.put(`${base}/api/v1/att/attdRule/`+params.id,params) };

export const removeAttdRule = params => {return axios.post(`${base}/api/v1/att/attdRule/batch`,Qs.stringify(params))};
// 规则管理搜索模糊查询接口
export const getSelectAttdRuleList = params => {return axios.get(`${base}/api/v1/att/attdRule/query/like`, { params: params }); };

//区域管理接口
export const getAttdCenterList = params => {return axios.get(`${base}/api/v1/att/attdCenter/`, { params: params })};

export const addAttdCenter = params => {return axios.post(`${base}/api/v1/att/attdCenter`, params)};

export const modifyAttdCenter = params => {return axios.put(`${base}/api/v1/att/attdCenter/`+params.id,params) };

export const removeAttdCenter = params => {return axios.post(`${base}/api/v1/att/attdCenter/batch`,Qs.stringify(params))};
// 区域管理搜索模糊查询接口
export const getSelectAttdCenter = params => {return axios.get(`${base}/api/v1/att/attdCenter/query/like`, { params: params }); };
/* ----------------------------------------------------------考勤管理部分结束------------------------------------------------------*/




/* -------------------------------------------------------------指标管理部分--------------------------------------------------------*/
//指标设置接口
export const getKpidefineList = params => {return axios.get(`${base}/api/v1/kpi/kpidefine`, { params: params })};

export const addKpidefine = params => {return axios.post(`${base}/api/v1/kpi/kpidefine`, params)};

export const modifyKpidefine = params => {return axios.put(`${base}/api/v1/kpi/kpidefine/`+params.id,params) };
// 查询联动
export const getMoreKpiList = params => {return axios.get(`${base}/api/v1/kpi/kpidefine/level/`+params.id, { params: params })};
// 所属对象
export const getKpiOwnerList = params => {return axios.get(`${base}/api/v1/kpi/kpidefine/kpiname`, { params: params })};
// 编辑指标所属对象
export const modifyKpiOwner = params => {return axios.put(`${base}/api/v1/kpi/kpidefine/modifyowner/`+params.id,params) };


// 指标设置搜索模糊查询接口
export const getSelectListKpidefine = params => {return axios.get(`${base}/api/v1/kpi/kpidefine/query/like`, { params: params }); };
/* ----------------------------------------------------------指标管理部分结束------------------------------------------------------*/







/* -------------------------------------------------------------工作台部分--------------------------------------------------------*/
// 车辆登记接口（添加车辆车主）
export const addVehOwnerList = params => {return axios.post(`${base}/api/v1/car/vehicleInfo/palt/save`,params )};

// 员工入职接口
export const addEmpInList = params => {return axios.post(`${base}/api/v1/org/employeeInfo/desk/add`,params )};

// 员工离职接口——任务接口
export const leaveEmpTaskList = params => {return axios.get(`${base}/api/v1/org/employeeInfo/query/task/`+ params.userid,params )};
// 员工离职接口——库存接口
export const leaveEmpStoList = params => {return axios.get(`${base}/api/v1/org/employeeInfo/query/banlance/`+ params.id,params )};
// 员工离职——转移任务
export const leaveEmpTaskTransfer = params => {return axios.put(`${base}/api/v1/org/employeeInfo/transfer`,params )};




// 新增客户接口
export const addCorporateDesk = params => {return axios.post(`${base}/api/v1/org/corporateInfo/desk`,params )};

//数据检测接口
export const getCheckout = params => {return axios.get(`${base}/api/v1/org/employeeInfo/checkout/`+params.para+'/'+params.value); };
export const getCheckoutOfVehicleInfo = params => {return axios.get(`${base}/api/v1/car/vehicleInfo/checkout/`+params.para+'/'+params.value); };
export const getCheckoutOfOwner = params => {return axios.get(`${base}/api/v1/car/ownerInfo/checkout/`+params.para+'/'+params.value); };
export const getCheckoutOfIns = params => {return axios.get(`${base}/api/v1/insur/insuranceInfo/checkout/`+params.para+'/'+params.value); }
export const getCheckoutOfCorpInfo = params => {return axios.get(`${base}/api/v1/org/corporateInfo/checkout/`+params.para+'/'+params.value); };
export const getCheckoutOfProdInfo = params => {return axios.get(`${base}/api/v1/device/productInfo/checkout/`+params.para+'/'+params.value); };
export const getCheckoutOfDeptInfo = params => {return axios.get(`${base}/api/v1/org/departmentInfo/checkout`,{params:params}); };
export const getCheckoutOfGroupInfo = params => {return axios.get(`${base}/api/v1/org/groupInfo/checkout/`+params.para+'/'+params.value); };
export const getCheckoutOfPosInfo = params => {return axios.get(`${base}/api/v1/org/positionInfo/checkout/`+params.para+'/'+params.value); };
export const getCheckoutOfStoInfo = params => {return axios.get(`${base}/api/v1/sto/storageInfo/checkout/`+params.para+'/'+params.value); };
export const getCheckoutOfUser = params => {return axios.get(`${base}/api/v1/sys/sysUserInfo/checkout/`+params.para+'/'+params.value); };

/* ----------------------------------------------------------工作台部分结束------------------------------------------------------*/




//所有创建人 记录人 修改人等 id转名字
export const getByUserIdName = params => {return axios.get(`${base}/api/v1/org/employeeInfo/getByUserId`,{ params: params })}       



/* ----------------------------------------------------------评论------------------------------------------------------*/
//获取评分等级信息
export const evaluateitem = params => {return axios.get(`${base}/api/v1/evaluate/EvaluateItem`)};   

//添加得分
export const addEvaluateDetail = params => {return axios.post(`${base}/api/v1/evaluate/EvaluateDetail/add`,params)} 

//添加评分
export const addBusiEvaluate= params => {return axios.post(`${base}/api/v1/evaluate/BusiEvaluate`,params)}  


/* --------------------------------------------------eacharts------------------------------------------------------*/
//获取总车辆数
export const carCount = params => {return axios.get(`${base}/api/v1/figures/cartotel`)};

//获取历史在线数
export const onlinecount = params => {return axios.get(`${base}/api/v1/figures/onlinecount`)};

//服务器
export const getservicelist = params => {return axios.post(`/gisapiservice/HealthMonitor/getservicelist1`)};

//获取vas系统内容
export const getVasServiceStatus = params => {return axios.get(`${base}/monitor/status`,{ params: params })};

//
export const getGisMonitorService = params => {return axios.get(`${base}/api/v1/figures/getGisMonitorService`,{ params: params })};

