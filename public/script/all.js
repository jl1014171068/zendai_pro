<!--
/* PCAS (Province City Area Selector 省、市、地区联动选择JS封装类) Ver 2.01 完整版 *\

　制作时间:2005-12-30
　更新时间:2006-01-24
　数据修正:2006-08-17
　文档大小:18KB
　演示地址:http://www.popub.net/script/pcasunzip.html
　下载地址:http://www.popub.net/script/pcasunzip.js
　应用说明:页面包含<script type="text/javascript" src="pcasunzip.js"></script>
	省市联动
		new PCAS("Province","City")
		new PCAS("Province","City","吉林省")
		new PCAS("Province","City","吉林省","吉林市")
	省市地区联动
		new PCAS("Province","City","Area")
		new PCAS("Province","City","Area","吉林省")
		new PCAS("Province","City","Area","吉林省","松原市")
		new PCAS("Province","City","Area","吉林省","松原市","宁江区")
	省、市、地区对象取得的值均为实际值。
	注：省、市、地区提示信息选项的值为""(空字符串)

　感谢
　　　网友418528#gmail.com对数据进行的核实工作 2006-08-07

\*** 程序制作/版权所有:崔永祥(333) E-Mail:zhadan007@21cn.com 网址:http://www.popub.net ***/


SPT="请选择省份";
SCT="请选择城市";
SAT="请选择地区";
ShowT=1;		//提示文字 0:不显示 1:显示
PCAD="北京市$市辖区,东城区,西城区,崇文区,宣武区,朝阳区,丰台区,石景山区,海淀区,门头沟区,房山区,通州区,顺义区,昌平区,大兴区,怀柔区,平谷区|市辖县,密云县,延庆县#天津市$市辖区,和平区,河东区,河西区,南开区,河北区,红桥区,塘沽区,汉沽区,大港区,东丽区,西青区,津南区,北辰区,武清区,宝坻区|市辖县,宁河县,静海县,蓟县#河北省$石家庄市,市辖区,长安区,桥东区,桥西区,新华区,井陉矿区,裕华区,井陉县,正定县,栾城县,行唐县,灵寿县,高邑县,深泽县,赞皇县,无极县,平山县,元氏县,赵县,辛集市,藁城市,晋州市,新乐市,鹿泉市|唐山市,市辖区,路南区,路北区,古冶区,开平区,丰南区,丰润区,滦县,滦南县,乐亭县,迁西县,玉田县,唐海县,遵化市,迁安市|秦皇岛市,市辖区,海港区,山海关区,北戴河区,青龙满族自治县,昌黎县,抚宁县,卢龙县|邯郸市,市辖区,邯山区,丛台区,复兴区,峰峰矿区,邯郸县,临漳县,成安县,大名县,涉县,磁县,肥乡县,永年县,邱县,鸡泽县,广平县,馆陶县,魏县,曲周县,武安市|邢台市,市辖区,桥东区,桥西区,邢台县,临城县,内丘县,柏乡县,隆尧县,任县,南和县,宁晋县,巨鹿县,新河县,广宗县,平乡县,威县,清河县,临西县,南宫市,沙河市|保定市,市辖区,新市区,北市区,南市区,满城县,清苑县,涞水县,阜平县,徐水县,定兴县,唐县,高阳县,容城县,涞源县,望都县,安新县,易县,曲阳县,蠡县,顺平县,博野县,雄县,涿州市,定州市,安国市,高碑店市|张家口市,市辖区,桥东区,桥西区,宣化区,下花园区,宣化县,张北县,康保县,沽源县,尚义县,蔚县,阳原县,怀安县,万全县,怀来县,涿鹿县,赤城县,崇礼县|承德市,市辖区,双桥区,双滦区,鹰手营子矿区,承德县,兴隆县,平泉县,滦平县,隆化县,丰宁满族自治县,宽城满族自治县,围场满族蒙古族自治县|沧州市,市辖区,新华区,运河区,沧县,青县,东光县,海兴县,盐山县,肃宁县,南皮县,吴桥县,献县,孟村回族自治县,泊头市,任丘市,黄骅市,河间市|廊坊市,市辖区,安次区,广阳区,固安县,永清县,香河县,大城县,文安县,大厂回族自治县,霸州市,三河市|衡水市,市辖区,桃城区,枣强县,武邑县,武强县,饶阳县,安平县,故城县,景县,阜城县,冀州市,深州市#山西省$太原市,市辖区,小店区,迎泽区,杏花岭区,尖草坪区,万柏林区,晋源区,清徐县,阳曲县,娄烦县,古交市|大同市,市辖区,城区,矿区,南郊区,新荣区,阳高县,天镇县,广灵县,灵丘县,浑源县,左云县,大同县|阳泉市,市辖区,城区,矿区,郊区,平定县,盂县|长治市,市辖区,城区,郊区,长治县,襄垣县,屯留县,平顺县,黎城县,壶关县,长子县,武乡县,沁县,沁源县,潞城市|晋城市,市辖区,城区,沁水县,阳城县,陵川县,泽州县,高平市|朔州市,市辖区,朔城区,平鲁区,山阴县,应县,右玉县,怀仁县|晋中市,市辖区,榆次区,榆社县,左权县,和顺县,昔阳县,寿阳县,太谷县,祁县,平遥县,灵石县,介休市|运城市,市辖区,盐湖区,临猗县,万荣县,闻喜县,稷山县,新绛县,绛县,垣曲县,夏县,平陆县,芮城县,永济市,河津市|忻州市,市辖区,忻府区,定襄县,五台县,代县,繁峙县,宁武县,静乐县,神池县,五寨县,岢岚县,河曲县,保德县,偏关县,原平市|临汾市,市辖区,尧都区,曲沃县,翼城县,襄汾县,洪洞县,古县,安泽县,浮山县,吉县,乡宁县,大宁县,隰县,永和县,蒲县,汾西县,侯马市,霍州市|吕梁市,市辖区,离石区,文水县,交城县,兴县,临县,柳林县,石楼县,岚县,方山县,中阳县,交口县,孝义市,汾阳市#内蒙古自治区$呼和浩特市,市辖区,新城区,回民区,玉泉区,赛罕区,土默特左旗,托克托县,和林格尔县,清水河县,武川县|包头市,市辖区,东河区,昆都仑区,青山区,石拐区,白云矿区,九原区,土默特右旗,固阳县,达尔罕茂明安联合旗|乌海市,市辖区,海勃湾区,海南区,乌达区|赤峰市,市辖区,红山区,元宝山区,松山区,阿鲁科尔沁旗,巴林左旗,巴林右旗,林西县,克什克腾旗,翁牛特旗,喀喇沁旗,宁城县,敖汉旗|通辽市,市辖区,科尔沁区,科尔沁左翼中旗,科尔沁左翼后旗,开鲁县,库伦旗,奈曼旗,扎鲁特旗,霍林郭勒市|鄂尔多斯市,东胜区,达拉特旗,准格尔旗,鄂托克前旗,鄂托克旗,杭锦旗,乌审旗,伊金霍洛旗|呼伦贝尔市,市辖区,海拉尔区,阿荣旗,莫力达瓦达斡尔族自治旗,鄂伦春自治旗,鄂温克族自治旗,陈巴尔虎旗,新巴尔虎左旗,新巴尔虎右旗,满洲里市,牙克石市,扎兰屯市,额尔古纳市,根河市|巴彦淖尔市,市辖区,临河区,五原县,磴口县,乌拉特前旗,乌拉特中旗,乌拉特后旗,杭锦后旗|乌兰察布市,市辖区,集宁区,卓资县,化德县,商都县,兴和县,凉城县,察哈尔右翼前旗,察哈尔右翼中旗,察哈尔右翼后旗,四子王旗,丰镇市|兴安盟,乌兰浩特市,阿尔山市,科尔沁右翼前旗,科尔沁右翼中旗,扎赉特旗,突泉县|锡林郭勒盟,二连浩特市,锡林浩特市,阿巴嘎旗,苏尼特左旗,苏尼特右旗,东乌珠穆沁旗,西乌珠穆沁旗,太仆寺旗,镶黄旗,正镶白旗,正蓝旗,多伦县|阿拉善盟,阿拉善左旗,阿拉善右旗,额济纳旗#辽宁省$沈阳市,市辖区,和平区,沈河区,大东区,皇姑区,铁西区,苏家屯区,东陵区,新城子区,于洪区,辽中县,康平县,法库县,新民市|大连市,市辖区,中山区,西岗区,沙河口区,甘井子区,旅顺口区,金州区,长海县,瓦房店市,普兰店市,庄河市|鞍山市,市辖区,铁东区,铁西区,立山区,千山区,台安县,岫岩满族自治县,海城市|抚顺市,市辖区,新抚区,东洲区,望花区,顺城区,抚顺县,新宾满族自治县,清原满族自治县|本溪市,市辖区,平山区,溪湖区,明山区,南芬区,本溪满族自治县,桓仁满族自治县|丹东市,市辖区,元宝区,振兴区,振安区,宽甸满族自治县,东港市,凤城市|锦州市,市辖区,古塔区,凌河区,太和区,黑山县,义县,凌海市,北宁市|营口市,市辖区,站前区,西市区,鲅鱼圈区,老边区,盖州市,大石桥市|阜新市,市辖区,海州区,新邱区,太平区,清河门区,细河区,阜新蒙古族自治县,彰武县|辽阳市,市辖区,白塔区,文圣区,宏伟区,弓长岭区,太子河区,辽阳县,灯塔市|盘锦市,市辖区,双台子区,兴隆台区,大洼县,盘山县|铁岭市,市辖区,银州区,清河区,铁岭县,西丰县,昌图县,调兵山市,开原市|朝阳市,市辖区,双塔区,龙城区,朝阳县,建平县,喀喇沁左翼蒙古族自治县,北票市,凌源市|葫芦岛市,市辖区,连山区,龙港区,南票区,绥中县,建昌县,兴城市#吉林省$长春市,市辖区,南关区,宽城区,朝阳区,二道区,绿园区,双阳区,农安县,九台市,榆树市,德惠市|吉林市,市辖区,昌邑区,龙潭区,船营区,丰满区,永吉县,蛟河市,桦甸市,舒兰市,磐石市|四平市,市辖区,铁西区,铁东区,梨树县,伊通满族自治县,公主岭市,双辽市|辽源市,市辖区,龙山区,西安区,东丰县,东辽县|通化市,市辖区,东昌区,二道江区,通化县,辉南县,柳河县,梅河口市,集安市|白山市,市辖区,八道江区,抚松县,靖宇县,长白朝鲜族自治县,江源县,临江市|松原市,市辖区,宁江区,前郭尔罗斯蒙古族自治县,长岭县,乾安县,扶余县|白城市,市辖区,洮北区,镇赉县,通榆县,洮南市,大安市|延边朝鲜族自治州,延吉市,图们市,敦化市,珲春市,龙井市,和龙市,汪清县,安图县#黑龙江省$哈尔滨市,市辖区,道里区,南岗区,道外区,香坊区,动力区,平房区,松北区,呼兰区,依兰县,方正县,宾县,巴彦县,木兰县,通河县,延寿县,阿城市,双城市,尚志市,五常市|齐齐哈尔市,市辖区,龙沙区,建华区,铁锋区,昂昂溪区,富拉尔基区,碾子山区,梅里斯达斡尔族区,龙江县,依安县,泰来县,甘南县,富裕县,克山县,克东县,拜泉县,讷河市|鸡西市,市辖区,鸡冠区,恒山区,滴道区,梨树区,城子河区,麻山区,鸡东县,虎林市,密山市|鹤岗市,市辖区,向阳区,工农区,南山区,兴安区,东山区,兴山区,萝北县,绥滨县|双鸭山市,市辖区,尖山区,岭东区,四方台区,宝山区,集贤县,友谊县,宝清县,饶河县|大庆市,市辖区,萨尔图区,龙凤区,让胡路区,红岗区,大同区,肇州县,肇源县,林甸县,杜尔伯特蒙古族自治县|伊春市,市辖区,伊春区,南岔区,友好区,西林区,翠峦区,新青区,美溪区,金山屯区,五营区,乌马河区,汤旺河区,带岭区,乌伊岭区,红星区,上甘岭区,嘉荫县,铁力市|佳木斯市,市辖区,永红区,向阳区,前进区,东风区,郊区,桦南县,桦川县,汤原县,抚远县,同江市,富锦市|七台河市,市辖区,新兴区,桃山区,茄子河区,勃利县|牡丹江市,市辖区,东安区,阳明区,爱民区,西安区,东宁县,林口县,绥芬河市,海林市,宁安市,穆棱市|黑河市,市辖区,爱辉区,嫩江县,逊克县,孙吴县,北安市,五大连池市|绥化市,市辖区,北林区,望奎县,兰西县,青冈县,庆安县,明水县,绥棱县,安达市,肇东市,海伦市|大兴安岭地区,呼玛县,塔河县,漠河县#上海市$市辖区,黄浦区,卢湾区,徐汇区,长宁区,静安区,普陀区,闸北区,虹口区,杨浦区,闵行区,宝山区,嘉定区,浦东新区,金山区,松江区,青浦区,南汇区,奉贤区|市辖县,崇明县#江苏省$南京市,市辖区,玄武区,白下区,秦淮区,建邺区,鼓楼区,下关区,浦口区,栖霞区,雨花台区,江宁区,六合区,溧水县,高淳县|无锡市,市辖区,崇安区,南长区,北塘区,锡山区,惠山区,滨湖区,江阴市,宜兴市|徐州市,市辖区,鼓楼区,云龙区,九里区,贾汪区,泉山区,丰县,沛县,铜山县,睢宁县,新沂市,邳州市|常州市,市辖区,天宁区,钟楼区,戚墅堰区,新北区,武进区,溧阳市,金坛市|苏州市,市辖区,沧浪区,平江区,金阊区,虎丘区,吴中区,相城区,常熟市,张家港市,昆山市,吴江市,太仓市|南通市,市辖区,崇川区,港闸区,海安县,如东县,启东市,如皋市,通州市,海门市|连云港市,市辖区,连云区,新浦区,海州区,赣榆县,东海县,灌云县,灌南县|淮安市,市辖区,清河区,楚州区,淮阴区,清浦区,涟水县,洪泽县,盱眙县,金湖县|盐城市,市辖区,亭湖区,盐都区,响水县,滨海县,阜宁县,射阳县,建湖县,东台市,大丰市|扬州市,市辖区,广陵区,邗江区,维扬区,宝应县,仪征市,高邮市,江都市|镇江市,市辖区,京口区,润州区,丹徒区,丹阳市,扬中市,句容市|泰州市,市辖区,海陵区,高港区,兴化市,靖江市,泰兴市,姜堰市|宿迁市,市辖区,宿城区,宿豫区,沭阳县,泗阳县,泗洪县#浙江省$杭州市,市辖区,上城区,下城区,江干区,拱墅区,西湖区,滨江区,萧山区,余杭区,桐庐县,淳安县,建德市,富阳市,临安市|宁波市,市辖区,海曙区,江东区,江北区,北仑区,镇海区,鄞州区,象山县,宁海县,余姚市,慈溪市,奉化市|温州市,市辖区,鹿城区,龙湾区,瓯海区,洞头县,永嘉县,平阳县,苍南县,文成县,泰顺县,瑞安市,乐清市|嘉兴市,市辖区,秀城区,秀洲区,嘉善县,海盐县,海宁市,平湖市,桐乡市|湖州市,市辖区,吴兴区,南浔区,德清县,长兴县,安吉县|绍兴市,市辖区,越城区,绍兴县,新昌县,诸暨市,上虞市,嵊州市|金华市,市辖区,婺城区,金东区,武义县,浦江县,磐安县,兰溪市,义乌市,东阳市,永康市|衢州市,市辖区,柯城区,衢江区,常山县,开化县,龙游县,江山市|舟山市,市辖区,定海区,普陀区,岱山县,嵊泗县|台州市,市辖区,椒江区,黄岩区,路桥区,玉环县,三门县,天台县,仙居县,温岭市,临海市|丽水市,市辖区,莲都区,青田县,缙云县,遂昌县,松阳县,云和县,庆元县,景宁畲族自治县,龙泉市#安徽省$合肥市,市辖区,瑶海区,庐阳区,蜀山区,包河区,长丰县,肥东县,肥西县|芜湖市,市辖区,镜湖区,弋江区,鸠江区,三山区,芜湖县,繁昌县,南陵县|蚌埠市,市辖区,龙子湖区,蚌山区,禹会区,淮上区,怀远县,五河县,固镇县|淮南市,市辖区,大通区,田家庵区,谢家集区,八公山区,潘集区,凤台县|马鞍山市,市辖区,金家庄区,花山区,雨山区,当涂县|淮北市,市辖区,杜集区,相山区,烈山区,濉溪县|铜陵市,市辖区,铜官山区,狮子山区,郊区,铜陵县|安庆市,市辖区,迎江区,大观区,宜秀区,怀宁县,枞阳县,潜山县,太湖县,宿松县,望江县,岳西县,桐城市|黄山市,市辖区,屯溪区,黄山区,徽州区,歙县,休宁县,黟县,祁门县|滁州市,市辖区,琅琊区,南谯区,来安县,全椒县,定远县,凤阳县,天长市,明光市|阜阳市,市辖区,颍州区,颍东区,颍泉区,临泉县,太和县,阜南县,颍上县,界首市|宿州市,市辖区,埇桥区,砀山县,萧县,灵璧县,泗县|巢湖市,市辖区,居巢区,庐江县,无为县,含山县,和县|六安市,市辖区,金安区,裕安区,寿县,霍邱县,舒城县,金寨县,霍山县|亳州市,市辖区,谯城区,涡阳县,蒙城县,利辛县|池州市,市辖区,贵池区,东至县,石台县,青阳县|宣城市,市辖区,宣州区,郎溪县,广德县,泾县,绩溪县,旌德县,宁国市#福建省$福州市,市辖区,鼓楼区,台江区,仓山区,马尾区,晋安区,闽侯县,连江县,罗源县,闽清县,永泰县,平潭县,福清市,长乐市|厦门市,市辖区,思明区,海沧区,湖里区,集美区,同安区,翔安区|莆田市,市辖区,城厢区,涵江区,荔城区,秀屿区,仙游县|三明市,市辖区,梅列区,三元区,明溪县,清流县,宁化县,大田县,尤溪县,沙县,将乐县,泰宁县,建宁县,永安市|泉州市,市辖区,鲤城区,丰泽区,洛江区,泉港区,惠安县,安溪县,永春县,德化县,金门县,石狮市,晋江市,南安市|漳州市,市辖区,芗城区,龙文区,云霄县,漳浦县,诏安县,长泰县,东山县,南靖县,平和县,华安县,龙海市|南平市,市辖区,延平区,顺昌县,浦城县,光泽县,松溪县,政和县,邵武市,武夷山市,建瓯市,建阳市|龙岩市,市辖区,新罗区,长汀县,永定县,上杭县,武平县,连城县,漳平市|宁德市,市辖区,蕉城区,霞浦县,古田县,屏南县,寿宁县,周宁县,柘荣县,福安市,福鼎市#江西省$南昌市,市辖区,东湖区,西湖区,青云谱区,湾里区,青山湖区,南昌县,新建县,安义县,进贤县|景德镇市,市辖区,昌江区,珠山区,浮梁县,乐平市|萍乡市,市辖区,安源区,湘东区,莲花县,上栗县,芦溪县|九江市,市辖区,庐山区,浔阳区,九江县,武宁县,修水县,永修县,德安县,星子县,都昌县,湖口县,彭泽县,瑞昌市|新余市,市辖区,渝水区,分宜县|鹰潭市,市辖区,月湖区,余江县,贵溪市|赣州市,市辖区,章贡区,赣县,信丰县,大余县,上犹县,崇义县,安远县,龙南县,定南县,全南县,宁都县,于都县,兴国县,会昌县,寻乌县,石城县,瑞金市,南康市|吉安市,市辖区,吉州区,青原区,吉安县,吉水县,峡江县,新干县,永丰县,泰和县,遂川县,万安县,安福县,永新县,井冈山市|宜春市,市辖区,袁州区,奉新县,万载县,上高县,宜丰县,靖安县,铜鼓县,丰城市,樟树市,高安市|抚州市,市辖区,临川区,南城县,黎川县,南丰县,崇仁县,乐安县,宜黄县,金溪县,资溪县,东乡县,广昌县|上饶市,市辖区,信州区,上饶县,广丰县,玉山县,铅山县,横峰县,弋阳县,余干县,鄱阳县,万年县,婺源县,德兴市#山东省$济南市,市辖区,历下区,市中区,槐荫区,天桥区,历城区,长清区,平阴县,济阳县,商河县,章丘市|青岛市,市辖区,市南区,市北区,四方区,黄岛区,崂山区,李沧区,城阳区,胶州市,即墨市,平度市,胶南市,莱西市|淄博市,市辖区,淄川区,张店区,博山区,临淄区,周村区,桓台县,高青县,沂源县|枣庄市,市辖区,市中区,薛城区,峄城区,台儿庄区,山亭区,滕州市|东营市,市辖区,东营区,河口区,垦利县,利津县,广饶县|烟台市,市辖区,芝罘区,福山区,牟平区,莱山区,长岛县,龙口市,莱阳市,莱州市,蓬莱市,招远市,栖霞市,海阳市|潍坊市,市辖区,潍城区,寒亭区,坊子区,奎文区,临朐县,昌乐县,青州市,诸城市,寿光市,安丘市,高密市,昌邑市|济宁市,市辖区,市中区,任城区,微山县,鱼台县,金乡县,嘉祥县,汶上县,泗水县,梁山县,曲阜市,兖州市,邹城市|泰安市,市辖区,泰山区,岱岳区,宁阳县,东平县,新泰市,肥城市|威海市,市辖区,环翠区,文登市,荣成市,乳山市|日照市,市辖区,东港区,岚山区,五莲县,莒县|莱芜市,市辖区,莱城区,钢城区|临沂市,市辖区,兰山区,罗庄区,河东区,沂南县,郯城县,沂水县,苍山县,费县,平邑县,莒南县,蒙阴县,临沭县|德州市,市辖区,德城区,陵县,宁津县,庆云县,临邑县,齐河县,平原县,夏津县,武城县,乐陵市,禹城市|聊城市,市辖区,东昌府区,阳谷县,莘县,茌平县,东阿县,冠县,高唐县,临清市|滨州市,市辖区,滨城区,惠民县,阳信县,无棣县,沾化县,博兴县,邹平县|菏泽市,市辖区,牡丹区,曹县,单县,成武县,巨野县,郓城县,鄄城县,定陶县,东明县#河南省$郑州市,市辖区,中原区,二七区,管城回族区,金水区,上街区,惠济区,中牟县,巩义市,荥阳市,新密市,新郑市,登封市|开封市,市辖区,龙亭区,顺河回族区,鼓楼区,禹王台区,金明区,杞县,通许县,尉氏县,开封县,兰考县|洛阳市,市辖区,老城区,西工区,廛河回族区,涧西区,吉利区,洛龙区,孟津县,新安县,栾川县,嵩县,汝阳县,宜阳县,洛宁县,伊川县,偃师市|平顶山市,市辖区,新华区,卫东区,石龙区,湛河区,宝丰县,叶县,鲁山县,郏县,舞钢市,汝州市|安阳市,市辖区,文峰区,北关区,殷都区,龙安区,安阳县,汤阴县,滑县,内黄县,林州市|鹤壁市,市辖区,鹤山区,山城区,淇滨区,浚县,淇县|新乡市,市辖区,红旗区,卫滨区,凤泉区,牧野区,新乡县,获嘉县,原阳县,延津县,封丘县,长垣县,卫辉市,辉县市|焦作市,市辖区,解放区,中站区,马村区,山阳区,修武县,博爱县,武陟县,温县,济源市,沁阳市,孟州市|濮阳市,市辖区,华龙区,清丰县,南乐县,范县,台前县,濮阳县|许昌市,市辖区,魏都区,许昌县,鄢陵县,襄城县,禹州市,长葛市|漯河市,市辖区,源汇区,郾城区,召陵区,舞阳县,临颍县|三门峡市,市辖区,湖滨区,渑池县,陕县,卢氏县,义马市,灵宝市|南阳市,市辖区,宛城区,卧龙区,南召县,方城县,西峡县,镇平县,内乡县,淅川县,社旗县,唐河县,新野县,桐柏县,邓州市|商丘市,市辖区,梁园区,睢阳区,民权县,睢县,宁陵县,柘城县,虞城县,夏邑县,永城市|信阳市,市辖区,浉河区,平桥区,罗山县,光山县,新县,商城县,固始县,潢川县,淮滨县,息县|周口市,市辖区,川汇区,扶沟县,西华县,商水县,沈丘县,郸城县,淮阳县,太康县,鹿邑县,项城市|驻马店市,市辖区,驿城区,西平县,上蔡县,平舆县,正阳县,确山县,泌阳县,汝南县,遂平县,新蔡县#湖北省$武汉市,市辖区,江岸区,江汉区,硚口区,汉阳区,武昌区,青山区,洪山区,东西湖区,汉南区,蔡甸区,江夏区,黄陂区,新洲区|黄石市,市辖区,黄石港区,西塞山区,下陆区,铁山区,阳新县,大冶市|十堰市,市辖区,茅箭区,张湾区,郧县,郧西县,竹山县,竹溪县,房县,丹江口市|宜昌市,市辖区,西陵区,伍家岗区,点军区,猇亭区,夷陵区,远安县,兴山县,秭归县,长阳土家族自治县,五峰土家族自治县,宜都市,当阳市,枝江市|襄樊市,市辖区,襄城区,樊城区,襄阳区,南漳县,谷城县,保康县,老河口市,枣阳市,宜城市|鄂州市,市辖区,梁子湖区,华容区,鄂城区|荆门市,市辖区,东宝区,掇刀区,京山县,沙洋县,钟祥市|孝感市,市辖区,孝南区,孝昌县,大悟县,云梦县,应城市,安陆市,汉川市|荆州市,市辖区,沙市区,荆州区,公安县,监利县,江陵县,石首市,洪湖市,松滋市|黄冈市,市辖区,黄州区,团风县,红安县,罗田县,英山县,浠水县,蕲春县,黄梅县,麻城市,武穴市|咸宁市,市辖区,咸安区,嘉鱼县,通城县,崇阳县,通山县,赤壁市|随州市,市辖区,曾都区,广水市|恩施土家族苗族自治州,恩施市,利川市,建始县,巴东县,宣恩县,咸丰县,来凤县,鹤峰县|省直辖行政单位,仙桃市,潜江市,天门市,神农架林区#湖南省$长沙市,市辖区,芙蓉区,天心区,岳麓区,开福区,雨花区,长沙县,望城县,宁乡县,浏阳市|株洲市,市辖区,荷塘区,芦淞区,石峰区,天元区,株洲县,攸县,茶陵县,炎陵县,醴陵市|湘潭市,市辖区,雨湖区,岳塘区,湘潭县,湘乡市,韶山市|衡阳市,市辖区,珠晖区,雁峰区,石鼓区,蒸湘区,南岳区,衡阳县,衡南县,衡山县,衡东县,祁东县,耒阳市,常宁市|邵阳市,市辖区,双清区,大祥区,北塔区,邵东县,新邵县,邵阳县,隆回县,洞口县,绥宁县,新宁县,城步苗族自治县,武冈市|岳阳市,市辖区,岳阳楼区,云溪区,君山区,岳阳县,华容县,湘阴县,平江县,汨罗市,临湘市|常德市,市辖区,武陵区,鼎城区,安乡县,汉寿县,澧县,临澧县,桃源县,石门县,津市市|张家界市,市辖区,永定区,武陵源区,慈利县,桑植县|益阳市,市辖区,资阳区,赫山区,南县,桃江县,安化县,沅江市|郴州市,市辖区,北湖区,苏仙区,桂阳县,宜章县,永兴县,嘉禾县,临武县,汝城县,桂东县,安仁县,资兴市|永州市,市辖区,零陵区,冷水滩区,祁阳县,东安县,双牌县,道县,江永县,宁远县,蓝山县,新田县,江华瑶族自治县|怀化市,市辖区,鹤城区,中方县,沅陵县,辰溪县,溆浦县,会同县,麻阳苗族自治县,新晃侗族自治县,芷江侗族自治县,靖州苗族侗族自治县,通道侗族自治县,洪江市|娄底市,市辖区,娄星区,双峰县,新化县,冷水江市,涟源市|湘西土家族苗族自治州,吉首市,泸溪县,凤凰县,花垣县,保靖县,古丈县,永顺县,龙山县#广东省$广州市,市辖区,荔湾区,越秀区,海珠区,天河区,白云区,黄埔区,番禺区,花都区,南沙区,萝岗区,增城市,从化市|韶关市,市辖区,武江区,浈江区,曲江区,始兴县,仁化县,翁源县,乳源瑶族自治县,新丰县,乐昌市,南雄市|深圳市,市辖区,罗湖区,福田区,南山区,宝安区,龙岗区,盐田区|珠海市,市辖区,香洲区,斗门区,金湾区|汕头市,市辖区,龙湖区,金平区,濠江区,潮阳区,潮南区,澄海区,南澳县|佛山市,市辖区,禅城区,南海区,顺德区,三水区,高明区|江门市,市辖区,蓬江区,江海区,新会区,台山市,开平市,鹤山市,恩平市|湛江市,市辖区,赤坎区,霞山区,坡头区,麻章区,遂溪县,徐闻县,廉江市,雷州市,吴川市|茂名市,市辖区,茂南区,茂港区,电白县,高州市,化州市,信宜市|肇庆市,市辖区,端州区,鼎湖区,广宁县,怀集县,封开县,德庆县,高要市,四会市|惠州市,市辖区,惠城区,惠阳区,博罗县,惠东县,龙门县|梅州市,市辖区,梅江区,梅县,大埔县,丰顺县,五华县,平远县,蕉岭县,兴宁市|汕尾市,市辖区,城区,海丰县,陆河县,陆丰市|河源市,市辖区,源城区,紫金县,龙川县,连平县,和平县,东源县|阳江市,市辖区,江城区,阳西县,阳东县,阳春市|清远市,市辖区,清城区,佛冈县,阳山县,连山壮族瑶族自治县,连南瑶族自治县,清新县,英德市,连州市|东莞市|中山市|潮州市,市辖区,湘桥区,潮安县,饶平县|揭阳市,市辖区,榕城区,揭东县,揭西县,惠来县,普宁市|云浮市,市辖区,云城区,新兴县,郁南县,云安县,罗定市#广西壮族自治区$南宁市,市辖区,兴宁区,青秀区,江南区,西乡塘区,良庆区,邕宁区,武鸣县,隆安县,马山县,上林县,宾阳县,横县|柳州市,市辖区,城中区,鱼峰区,柳南区,柳北区,柳江县,柳城县,鹿寨县,融安县,融水苗族自治县,三江侗族自治县|桂林市,市辖区,秀峰区,叠彩区,象山区,七星区,雁山区,阳朔县,临桂县,灵川县,全州县,兴安县,永福县,灌阳县,龙胜各族自治县,资源县,平乐县,荔蒲县,恭城瑶族自治县|梧州市,市辖区,万秀区,蝶山区,长洲区,苍梧县,藤县,蒙山县,岑溪市|北海市,市辖区,海城区,银海区,铁山港区,合浦县|防城港市,市辖区,港口区,防城区,上思县,东兴市|钦州市,市辖区,钦南区,钦北区,灵山县,浦北县|贵港市,市辖区,港北区,港南区,覃塘区,平南县,桂平市|玉林市,市辖区,玉州区,容县,陆川县,博白县,兴业县,北流市|百色市,市辖区,右江区,田阳县,田东县,平果县,德保县,靖西县,那坡县,凌云县,乐业县,田林县,西林县,隆林各族自治县|贺州市,市辖区,八步区,昭平县,钟山县,富川瑶族自治县|河池市,市辖区,金城江区,南丹县,天峨县,凤山县,东兰县,罗城仫佬族自治县,环江毛南族自治县,巴马瑶族自治县,都安瑶族自治县,大化瑶族自治县,宜州市|来宾市,市辖区,兴宾区,忻城县,象州县,武宣县,金秀瑶族自治县,合山市|崇左市,市辖区,江洲区,扶绥县,宁明县,龙州县,大新县,天等县,凭祥市#海南省$海口市,市辖区,秀英区,龙华区,琼山区,美兰区|三亚市,市辖区|省直辖县级行政单位,五指山市,琼海市,儋州市,文昌市,万宁市,东方市,定安县,屯昌县,澄迈县,临高县,白沙黎族自治县,昌江黎族自治县,乐东黎族自治县,陵水黎族自治县,保亭黎族苗族自治县,琼中黎族苗族自治县,西沙群岛,南沙群岛,中沙群岛的岛礁及其海域#重庆市$市辖区,万州区,涪陵区,渝中区,大渡口区,江北区,沙坪坝区,九龙坡区,南岸区,北碚区,万盛区,双桥区,渝北区,巴南区,黔江区,长寿区|市辖县,綦江县,潼南县,铜梁县,大足县,荣昌县,璧山县,梁平县,城口县,丰都县,垫江县,武隆县,忠县,开县,云阳县,奉节县,巫山县,巫溪县,石柱土家族自治县,秀山土家族苗族自治县,酉阳土家族苗族自治县,彭水苗族土家族自治县|县级市,江津市,合川市,永川市,南川市#四川省$成都市,市辖区,锦江区,青羊区,金牛区,武侯区,成华区,龙泉驿区,青白江区,新都区,温江区,金堂县,双流县,郫县,大邑县,蒲江县,新津县,都江堰市,彭州市,邛崃市,崇州市|自贡市,市辖区,自流井区,贡井区,大安区,沿滩区,荣县,富顺县|攀枝花市,市辖区,东区,西区,仁和区,米易县,盐边县|泸州市,市辖区,江阳区,纳溪区,龙马潭区,泸县,合江县,叙永县,古蔺县|德阳市,市辖区,旌阳区,中江县,罗江县,广汉市,什邡市,绵竹市|绵阳市,市辖区,涪城区,游仙区,三台县,盐亭县,安县,梓潼县,北川羌族自治县,平武县,江油市|广元市,市辖区,市中区,元坝区,朝天区,旺苍县,青川县,剑阁县,苍溪县|遂宁市,市辖区,船山区,安居区,蓬溪县,射洪县,大英县|内江市,市辖区,市中区,东兴区,威远县,资中县,隆昌县|乐山市,市辖区,市中区,沙湾区,五通桥区,金口河区,犍为县,井研县,夹江县,沐川县,峨边彝族自治县,马边彝族自治县,峨眉山市|南充市,市辖区,顺庆区,高坪区,嘉陵区,南部县,营山县,蓬安县,仪陇县,西充县,阆中市|眉山市,市辖区,东坡区,仁寿县,彭山县,洪雅县,丹棱县,青神县|宜宾市,市辖区,翠屏区,宜宾县,南溪县,江安县,长宁县,高县,珙县,筠连县,兴文县,屏山县|广安市,市辖区,广安区,岳池县,武胜县,邻水县,华蓥市|达州市,市辖区,通川区,达县,宣汉县,开江县,大竹县,渠县,万源市|雅安市,市辖区,雨城区,名山县,荥经县,汉源县,石棉县,天全县,芦山县,宝兴县|巴中市,市辖区,巴州区,通江县,南江县,平昌县|资阳市,市辖区,雁江区,安岳县,乐至县,简阳市|阿坝藏族羌族自治州,汶川县,理县,茂县,松潘县,九寨沟县,金川县,小金县,黑水县,马尔康县,壤塘县,阿坝县,若尔盖县,红原县|甘孜藏族自治州,康定县,泸定县,丹巴县,九龙县,雅江县,道孚县,炉霍县,甘孜县,新龙县,德格县,白玉县,石渠县,色达县,理塘县,巴塘县,乡城县,稻城县,得荣县|凉山彝族自治州,西昌市,木里藏族自治县,盐源县,德昌县,会理县,会东县,宁南县,普格县,布拖县,金阳县,昭觉县,喜德县,冕宁县,越西县,甘洛县,美姑县,雷波县#贵州省$贵阳市,市辖区,南明区,云岩区,花溪区,乌当区,白云区,小河区,开阳县,息烽县,修文县,清镇市|六盘水市,钟山区,六枝特区,水城县,盘县|遵义市,市辖区,红花岗区,汇川区,遵义县,桐梓县,绥阳县,正安县,道真仡佬族苗族自治县,务川仡佬族苗族自治县,凤冈县,湄潭县,余庆县,习水县,赤水市,仁怀市|安顺市,市辖区,西秀区,平坝县,普定县,镇宁布依族苗族自治县,关岭布依族苗族自治县,紫云苗族布依族自治县|铜仁地区,铜仁市,江口县,玉屏侗族自治县,石阡县,思南县,印江土家族苗族自治县,德江县,沿河土家族自治县,松桃苗族自治县,万山特区|黔西南布依族苗族自治州,兴义市,兴仁县,普安县,晴隆县,贞丰县,望谟县,册亨县,安龙县|毕节地区,毕节市,大方县,黔西县,金沙县,织金县,纳雍县,威宁彝族回族苗族自治县,赫章县|黔东南苗族侗族自治州,凯里市,黄平县,施秉县,三穗县,镇远县,岑巩县,天柱县,锦屏县,剑河县,台江县,黎平县,榕江县,从江县,雷山县,麻江县,丹寨县|黔南布依族苗族自治州,都匀市,福泉市,荔波县,贵定县,瓮安县,独山县,平塘县,罗甸县,长顺县,龙里县,惠水县,三都水族自治县#云南省$昆明市,市辖区,五华区,盘龙区,官渡区,西山区,东川区,呈贡县,晋宁县,富民县,宜良县,石林彝族自治县,嵩明县,禄劝彝族苗族自治县,寻甸回族彝族自治县,安宁市|曲靖市,市辖区,麒麟区,马龙县,陆良县,师宗县,罗平县,富源县,会泽县,沾益县,宣威市|玉溪市,市辖区,红塔区,江川县,澄江县,通海县,华宁县,易门县,峨山彝族自治县,新平彝族傣族自治县,元江哈尼族彝族傣族自治县|保山市,市辖区,隆阳区,施甸县,腾冲县,龙陵县,昌宁县|昭通市,市辖区,昭阳区,鲁甸县,巧家县,盐津县,大关县,永善县,绥江县,镇雄县,彝良县,威信县,水富县|丽江市,市辖区,古城区,玉龙纳西族自治县,永胜县,华坪县,宁蒗彝族自治县|思茅市,市辖区,翠云区,普洱哈尼族彝族自治县,墨江哈尼族自治县,景东彝族自治县,景谷傣族彝族自治县,镇沅彝族哈尼族拉祜族自治县,江城哈尼族彝族自治县,孟连傣族拉祜族佤族自治县,澜沧拉祜族自治县,西盟佤族自治县|临沧市,市辖区,临翔区,凤庆县,云县,永德县,镇康县,双江拉祜族佤族布朗族傣族自治县,耿马傣族佤族自治县,沧源佤族自治县|楚雄彝族自治州,楚雄市,双柏县,牟定县,南华县,姚安县,大姚县,永仁县,元谋县,武定县,禄丰县|红河哈尼族彝族自治州,个旧市,开远市,蒙自县,屏边苗族自治县,建水县,石屏县,弥勒县,泸西县,元阳县,红河县,金平苗族瑶族傣族自治县,绿春县,河口瑶族自治县|文山壮族苗族自治州,文山县,砚山县,西畴县,麻栗坡县,马关县,丘北县,广南县,富宁县|西双版纳傣族自治州,景洪市,勐海县,勐腊县|大理白族自治州,大理市,漾濞彝族自治县,祥云县,宾川县,弥渡县,南涧彝族自治县,巍山彝族回族自治县,永平县,云龙县,洱源县,剑川县,鹤庆县|德宏傣族景颇族自治州,瑞丽市,潞西市,梁河县,盈江县,陇川县|怒江傈僳族自治州,泸水县,福贡县,贡山独龙族怒族自治县,兰坪白族普米族自治县|迪庆藏族自治州,香格里拉县,德钦县,维西傈僳族自治县#西藏自治区$拉萨市,市辖区,城关区,林周县,当雄县,尼木县,曲水县,堆龙德庆县,达孜县,墨竹工卡县|昌都地区,昌都县,江达县,贡觉县,类乌齐县,丁青县,察雅县,八宿县,左贡县,芒康县,洛隆县,边坝县|山南地区,乃东县,扎囊县,贡嘎县,桑日县,琼结县,曲松县,措美县,洛扎县,加查县,隆子县,错那县,浪卡子县|日喀则地区,日喀则市,南木林县,江孜县,定日县,萨迦县,拉孜县,昂仁县,谢通门县,白朗县,仁布县,康马县,定结县,仲巴县,亚东县,吉隆县,聂拉木县,萨嘎县,岗巴县|那曲地区,那曲县,嘉黎县,比如县,聂荣县,安多县,申扎县,索县,班戈县,巴青县,尼玛县|阿里地区,普兰县,札达县,噶尔县,日土县,革吉县,改则县,措勤县|林芝地区,林芝县,工布江达县,米林县,墨脱县,波密县,察隅县,朗县#陕西省$西安市,市辖区,新城区,碑林区,莲湖区,灞桥区,未央区,雁塔区,阎良区,临潼区,长安区,蓝田县,周至县,户县,高陵县|铜川市,市辖区,王益区,印台区,耀州区,宜君县|宝鸡市,市辖区,渭滨区,金台区,陈仓区,凤翔县,岐山县,扶风县,眉县,陇县,千阳县,麟游县,凤县,太白县|咸阳市,市辖区,秦都区,杨凌区,渭城区,三原县,泾阳县,乾县,礼泉县,永寿县,彬县,长武县,旬邑县,淳化县,武功县,兴平市|渭南市,市辖区,临渭区,华县,潼关县,大荔县,合阳县,澄城县,蒲城县,白水县,富平县,韩城市,华阴市|延安市,市辖区,宝塔区,延长县,延川县,子长县,安塞县,志丹县,吴起县,甘泉县,富县,洛川县,宜川县,黄龙县,黄陵县|汉中市,市辖区,汉台区,南郑县,城固县,洋县,西乡县,勉县,宁强县,略阳县,镇巴县,留坝县,佛坪县|榆林市,市辖区,榆阳区,神木县,府谷县,横山县,靖边县,定边县,绥德县,米脂县,佳县,吴堡县,清涧县,子洲县|安康市,市辖区,汉滨区,汉阴县,石泉县,宁陕县,紫阳县,岚皋县,平利县,镇坪县,旬阳县,白河县|商洛市,市辖区,商州区,洛南县,丹凤县,商南县,山阳县,镇安县,柞水县#甘肃省$兰州市,市辖区,城关区,七里河区,西固区,安宁区,红古区,永登县,皋兰县,榆中县|嘉峪关市,市辖区|金昌市,市辖区,金川区,永昌县|白银市,市辖区,白银区,平川区,靖远县,会宁县,景泰县|天水市,市辖区,秦城区,北道区,清水县,秦安县,甘谷县,武山县,张家川回族自治县|武威市,市辖区,凉州区,民勤县,古浪县,天祝藏族自治县|张掖市,市辖区,甘州区,肃南裕固族自治县,民乐县,临泽县,高台县,山丹县|平凉市,市辖区,崆峒区,泾川县,灵台县,崇信县,华亭县,庄浪县,静宁县|酒泉市,市辖区,肃州区,金塔县,安西县,肃北蒙古族自治县,阿克塞哈萨克族自治县,玉门市,敦煌市|庆阳市,市辖区,西峰区,庆城县,环县,华池县,合水县,正宁县,宁县,镇原县|定西市,市辖区,安定区,通渭县,陇西县,渭源县,临洮县,漳县,岷县|陇南市,市辖区,武都区,成县,文县,宕昌县,康县,西和县,礼县,徽县,两当县|临夏回族自治州,临夏市,临夏县,康乐县,永靖县,广河县,和政县,东乡族自治县,积石山保安族东乡族撒拉族自治县|甘南藏族自治州,合作市,临潭县,卓尼县,舟曲县,迭部县,玛曲县,碌曲县,夏河县#青海省$西宁市,市辖区,城东区,城中区,城西区,城北区,大通回族土族自治县,湟中县,湟源县|海东地区,平安县,民和回族土族自治县,乐都县,互助土族自治县,化隆回族自治县,循化撒拉族自治县|海北藏族自治州,门源回族自治县,祁连县,海晏县,刚察县|黄南藏族自治州,同仁县,尖扎县,泽库县,河南蒙古族自治县|海南藏族自治州,共和县,同德县,贵德县,兴海县,贵南县|果洛藏族自治州,玛沁县,班玛县,甘德县,达日县,久治县,玛多县|玉树藏族自治州,玉树县,杂多县,称多县,治多县,囊谦县,曲麻莱县|海西蒙古族藏族自治州,格尔木市,德令哈市,乌兰县,都兰县,天峻县#宁夏回族自治区$银川市,市辖区,兴庆区,西夏区,金凤区,永宁县,贺兰县,灵武市|石嘴山市,市辖区,大武口区,惠农区,平罗县|吴忠市,市辖区,利通区,盐池县,同心县,青铜峡市|固原市,市辖区,原州区,西吉县,隆德县,泾源县,彭阳县|中卫市,市辖区,沙坡头区,中宁县,海原县#新疆维吾尔自治区$乌鲁木齐市,市辖区,天山区,沙依巴克区,新市区,水磨沟区,头屯河区,达坂城区,东山区,乌鲁木齐县|克拉玛依市,市辖区,独山子区,克拉玛依区,白碱滩区,乌尔禾区|吐鲁番地区,吐鲁番市,鄯善县,托克逊县|哈密地区,哈密市,巴里坤哈萨克自治县,伊吾县|昌吉回族自治州,昌吉市,阜康市,米泉市,呼图壁县,玛纳斯县,奇台县,吉木萨尔县,木垒哈萨克自治县|博尔塔拉蒙古自治州,博乐市,精河县,温泉县|巴音郭楞蒙古自治州,库尔勒市,轮台县,尉犁县,若羌县,且末县,焉耆回族自治县,和静县,和硕县,博湖县|阿克苏地区,阿克苏市,温宿县,库车县,沙雅县,新和县,拜城县,乌什县,阿瓦提县,柯坪县|克孜勒苏柯尔克孜自治州,阿图什市,阿克陶县,阿合奇县,乌恰县|喀什地区,喀什市,疏附县,疏勒县,英吉沙县,泽普县,莎车县,叶城县,麦盖提县,岳普湖县,伽师县,巴楚县,塔什库尔干塔吉克自治县|和田地区,和田市,和田县,墨玉县,皮山县,洛浦县,策勒县,于田县,民丰县|伊犁哈萨克自治州,伊宁市,奎屯市,伊宁县,察布查尔锡伯自治县,霍城县,巩留县,新源县,昭苏县,特克斯县,尼勒克县|塔城地区,塔城市,乌苏市,额敏县,沙湾县,托里县,裕民县,和布克赛尔蒙古自治县|阿勒泰地区,阿勒泰市,布尔津县,富蕴县,福海县,哈巴河县,青河县,吉木乃县|省直辖行政单位,石河子市,阿拉尔市,图木舒克市,五家渠市#香港特别行政区$香港,香港特别行政区#澳门特别行政区$澳门,澳门特别行政区#台湾省$台北市,中正区,大同区,中山区,松山区,大安区,万华区,信义区,士林区,北投区,内湖区,南港区,文山区|高雄市,新兴区,前金区,芩雅区,盐埕区,鼓山区,旗津区,前镇区,三民区,左营区,楠梓区,小港区|基隆市,仁爱区,信义区,中正区,中山区,安乐区,暖暖区,七堵区|台中市,中区,东区,南区,西区,北区,北屯区,西屯区,南屯区|台南市,中西区,东区,南区,北区,安平区,安南区|新竹市,东区,北区,香山区|嘉义市,东区,西区|县,台北县(板桥市),宜兰县(宜兰市),新竹县(竹北市),桃园县(桃园市),苗栗县(苗栗市),台中县(丰原市),彰化县(彰化市),南投县(南投市),嘉义县(太保市),云林县(斗六市),台南县(新营市),高雄县(凤山市),屏东县(屏东市),台东县(台东市),花莲县(花莲市),澎湖县(马公市)#其它$亚洲,阿富汗,巴林,孟加拉国,不丹,文莱,缅甸,塞浦路斯,印度,印度尼西亚,伊朗,伊拉克,日本,约旦,朝鲜,科威特,老挝,马尔代夫,黎巴嫩,马来西亚,以色列,蒙古,尼泊尔,阿曼,巴基斯坦,巴勒斯坦,菲律宾,沙特阿拉伯,新加坡,斯里兰卡,叙利亚,泰国,柬埔寨,土耳其,阿联酋,越南,也门,韩国,中国,中国香港,中国澳门,中国台湾|非洲,阿尔及利亚,安哥拉,厄里特里亚,法罗群鸟,加那利群岛(西)(拉斯帕尔马斯),贝宁,博茨瓦纳,布基纳法索,布隆迪,喀麦隆,加那利群岛(西)(圣克鲁斯),佛得角,中非,乍得,科摩罗,刚果,吉布提,埃及,埃塞俄比亚,赤道几内亚,加蓬,冈比亚,加纳,几内亚,南非,几内亚比绍,科特迪瓦,肯尼亚,莱索托,利比里亚,利比亚,马达加斯加,马拉维,马里,毛里塔尼亚,毛里求斯,摩洛哥,莫桑比克,尼日尔,尼日利亚,留尼旺岛,卢旺达,塞内加尔,塞舌尔,塞拉利昂,索马里,苏丹,斯威士兰,坦桑尼亚,圣赤勒拿,多哥,突尼斯,乌干达,扎伊尔,赞比亚,津巴布韦,纳米比亚,迪戈加西亚,桑给巴尔,马约特岛,圣多美和普林西比|欧洲,阿尔巴尼亚,安道尔,奥地利,比利时,保加利亚,捷克,丹麦,芬兰,法国,德国,直布罗陀(英),希腊,匈牙利,冰岛,爱尔兰,意大利,列支敦士登,斯洛伐克,卢森堡,马耳他,摩纳哥,荷兰,挪威,波兰,葡萄牙,马其顿,罗马尼亚,南斯拉夫,圣马力诺,西班牙,瑞典,瑞士,英国,科罗地亚,斯洛文尼亚,梵蒂冈,波斯尼亚和塞哥维那,俄罗斯联邦,亚美尼亚共和国,白俄罗斯共和国,格鲁吉亚共和国,哈萨克斯坦共和国,吉尔吉斯坦共和国,乌兹别克斯坦共和国,塔吉克斯坦共和国,土库曼斯坦共和国,乌克兰,立陶宛,拉脱维亚,爱沙尼亚,摩尔多瓦,阿塞拜疆|美洲,安圭拉岛,安提瓜和巴布达,阿根廷,阿鲁巴岛,阿森松,巴哈马,巴巴多斯,伯利兹,百慕大群岛,玻利维亚,巴西,加拿大,开曼群岛,智利,哥伦比亚,多米尼加联邦,哥斯达黎加,古巴,多米尼加共和国,厄瓜多尔,萨尔瓦多,法属圭亚那,格林纳达,危地马拉,圭亚那,海地,洪都拉斯,牙买加,马提尼克(法),墨西哥,蒙特塞拉特岛,荷属安的列斯群岛,尼加拉瓜,巴拿马,巴拉圭,秘鲁,波多黎哥,圣皮埃尔岛密克隆岛(法),圣克里斯托弗和尼维斯,圣卢西亚,福克兰群岛,维尔京群岛(英),圣文森特岛(英),维尔京群岛(美),苏里南,特立尼达和多巴哥,乌拉圭,美国,委内瑞拉,格陵兰岛,特克斯和凯科斯群岛,瓜多罗普|大洋洲,澳大利亚,科克群岛,斐济,法属波里尼西亚、塔希提,瓦努阿图,关岛,基里巴斯,马里亚纳群岛,中途岛,瑙鲁,新咯里多尼亚群岛,新西兰,巴布亚新几内亚,东萨摩亚,西萨摩亚,所罗门群岛,汤加,对诞岛,威克岛,科科斯岛,夏威夷,诺福克岛,帕劳,纽埃岛,图瓦卢,托克鲁,密克罗尼西亚,马绍尔群岛,瓦里斯加富士那群岛";if(ShowT)PCAD=SPT+"$"+SCT+","+SAT+"#"+PCAD;PCAArea=[];PCAP=[];PCAC=[];PCAA=[];PCAN=PCAD.split("#");for(i=0;i<PCAN.length;i++){PCAA[i]=[];TArea=PCAN[i].split("$")[1].split("|");for(j=0;j<TArea.length;j++){PCAA[i][j]=TArea[j].split(",");if(PCAA[i][j].length==1)PCAA[i][j][1]=SAT;TArea[j]=TArea[j].split(",")[0]}PCAArea[i]=PCAN[i].split("$")[0]+","+TArea.join(",");PCAP[i]=PCAArea[i].split(",")[0];PCAC[i]=PCAArea[i].split(',')}function PCAS(){this.SelP=document.getElementsByName(arguments[0])[0];this.SelC=document.getElementsByName(arguments[1])[0];this.SelA=document.getElementsByName(arguments[2])[0];this.DefP=this.SelA?arguments[3]:arguments[2];this.DefC=this.SelA?arguments[4]:arguments[3];this.DefA=this.SelA?arguments[5]:arguments[4];this.SelP.PCA=this;this.SelC.PCA=this;this.SelP.onchange=function(){PCAS.SetC(this.PCA)};if(this.SelA)this.SelC.onchange=function(){PCAS.SetA(this.PCA)};PCAS.SetP(this)};PCAS.SetP=function(PCA){for(i=0;i<PCAP.length;i++){PCAPT=PCAPV=PCAP[i];if(PCAPT==SPT)PCAPV="";PCA.SelP.options.add(new Option(PCAPT,PCAPV));if(PCA.DefP==PCAPV)PCA.SelP[i].selected=true}PCAS.SetC(PCA)};PCAS.SetC=function(PCA){PI=PCA.SelP.selectedIndex;PCA.SelC.length=0;for(i=1;i<PCAC[PI].length;i++){PCACT=PCACV=PCAC[PI][i];if(PCACT==SCT)PCACV="";PCA.SelC.options.add(new Option(PCACT,PCACV));if(PCA.DefC==PCACV)PCA.SelC[i-1].selected=true}if(PCA.SelA)PCAS.SetA(PCA)};PCAS.SetA=function(PCA){PI=PCA.SelP.selectedIndex;CI=PCA.SelC.selectedIndex;PCA.SelA.length=0;for(i=1;i<PCAA[PI][CI].length;i++){PCAAT=PCAAV=PCAA[PI][CI][i];if(PCAAT==SAT)PCAAV="";PCA.SelA.options.add(new Option(PCAAT,PCAAV));if(PCA.DefA==PCAAV)PCA.SelA[i-1].selected=true}}
//-->
/*
  年月日联动下拉选择JS封装类 Ver 1.0 版
  制作时间:2013-3-12
　更新时间:2013-3-12
  应用说明:页面包含<script type="text/javascript" src="YMDClass.js" charset="utf-8"></script>
  <select name="year1"></select>
  <select name="month1"></select>
  <select name="day1"></select>
  <script>
  new YMDselect('year1','month1','day1',1990,2,10);
  </script>
  年月联动
    new YMDselect('year1','month1');
    new YMDselect('year1','month1',1990);
    new YMDselect('year1','month1',1990,2);
  年月日联动
    new YMDselect('year1','month1','day1');
    new YMDselect('year1','month1','day1',1990);
    new YMDselect('year1','month1','day1',1990,2);
    new YMDselect('year1','month1','day1',1990,2,10);
\*** 程序制作/版权所有:Kevin QQ:251378427 E-Mail:yeminch@qq.com 网址:http://iulog.com ***/
SYT="请选择年份";
SMT="请选择月份";
SDT="请选择日期";
BYN=50;//年份范围往前50年
AYN=5;//年份范围往后0年
function YMDselect(){
  this.SelY=document.getElementsByName(arguments[0])[0];
  this.SelM=document.getElementsByName(arguments[1])[0];
  this.SelD=document.getElementsByName(arguments[2])[0];
  this.DefY=this.SelD?arguments[3]:arguments[2];
  this.DefM=this.SelD?arguments[4]:arguments[3];
  this.DefD=this.SelD?arguments[5]:arguments[4];
  this.SelY.YMD=this;
  this.SelM.YMD=this;
  this.SelY.onchange=function(){YMDselect.SetM(this.YMD)};
  if(this.SelD)this.SelM.onchange=function(){YMDselect.SetD(this.YMD)};
  YMDselect.SetY(this)
};
//设置年份
YMDselect.SetY=function(YMD){
  dDate = new Date();
  dCurYear = dDate.getFullYear();
  YMD.SelY.options.add(new Option(SYT,'0'));
  for(i = dCurYear+AYN; i>(dCurYear-BYN); i--){
    YMDYT=i+'年';
    YMDYV=i;
    OptY = new Option(YMDYT,YMDYV);
    YMD.SelY.options.add(OptY);
    if(YMD.DefY==YMDYV) OptY.selected=true
  }
  YMDselect.SetM(YMD)
};
//设置月份
YMDselect.SetM=function(YMD){
  YMD.SelM.length = 0;
  YMD.SelM.options.add(new Option(SMT,'0'));
  if(YMD.SelY.value>0){
    for(var i=1;i<=12;i++){
      YMDMT=i+'月';
      YMDMV=i;
      OptM=new Option(YMDMT,YMDMV);
      YMD.SelM.options.add(OptM);
      if(YMD.DefM==YMDMV) OptM.selected=true
    }
  }
  if(YMD.SelD)YMDselect.SetD(YMD)
};
//设置日期
YMDselect.SetD=function(YMD){
  YI=YMD.SelY.value;
  MI=YMD.SelM.value;
  YMD.SelD.length = 0;
  YMD.SelD.options.add(new Option(SDT,'0'));
  if(YI>0 && MI>0){
    dPrevDate = new Date(YI, MI, 0);
    daysInMonth=dPrevDate.getDate();
    for (d = 1; d <= parseInt(daysInMonth); d++) {
      YMDDT=d+'日';
      YMDDV=d;
      OptD=new Option(YMDDT,YMDDV);
      YMD.SelD.options.add(OptD);
      if(YMD.DefD==YMDDV)OptD.selected=true
    }
  }
}
// 上面是年月日插件
 $.extend({
        telReg:function(str){
            var telz = /^((\+?86)|(\(\+86\)))?1\d{10}$/;
            if(telz.test(str)){
                return true;
            }
            else{
                return false;
            }
        },
        pwdReg:function(str){
            var pwd = /^[\u4E00-\u9FA5A-Za-z0-9]{6,20}$/;
            if(pwd.test(str)){
                return true;
            }
            else{
                return false;
            }
        },
        emailReg:function(str){
          var email=/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
          if(email.test(str)){
                return true;
            }
            else{
                return false;
            }
        }
     })
 // 封装的简易验证组件
  function erroDate(s,calback){
    //调用的话这里写的比较死，
    var regist;
    var text;
    var erros={
         erroTel:'手机号不能为空/手机号码格式错误',
         erroReg:'验证码不能为空/验证码错误',
         erroUserName:'姓名不能为空',
         erroPwd:'密码不能为空/密码格式错误',
         erroAgainPwd:'两次输入密码不一致，请重新输入',
         erroCheck:'请阅读并同意《证大艺术用户协议》',
         erroEmail:'邮箱地址不能为空/邮箱地址格式错误'
    }
    $.each(erros,function(k,v){
      if(s==k){
        text=erros[k];   
      }
    })
    if(calback){
      // 如果需要其他样式之类的话就写返回值，例子如下，否则直接空
      //  if(calback=='regist'){
      //  regist='<div class="prompt col-lg-offset-3 col-md-offset-3 col-sm-offset-3  col-xs-offset-0"><p class=" bg-danger fail">'+text+'</p></div>'
      //  return regist
      // }
    }
    else{
      regist='<div class="prompt col-lg-offset-3 col-md-offset-3 col-sm-offset-3  col-xs-offset-0"><p class=" bg-danger fail">'+text+'</p></div>'
       return regist;
    }
  }
  // 简易的报错提示信息
function verificationCode(dom,seconds){
    $(dom+" .regBtn").on('click',function(){
     var $tel=$(dom+" .zdTel");
      if($.telReg($tel.val())){
        var time=seconds;
        var timer=setInterval(function(){
           $(dom).addClass('click').attr("disabled",true);
           $(dom).html(time+"秒后重发");
           if(time<0){
            $(dom).removeClass('click').removeAttr("disabled").html('重新获取验证码');
            clearInterval(timer);
           }
            time-=1;
        },1000);
      }
      else{
        $tel.parents(".form-group ").find(".prompt").remove();
        $tel.focus();
        $tel.parents(".form-group ").append(erroDate("erroTel"));
      }
      return false;
    })
}
// 验证码函数verificationCode(dom元素,秒数);

function validateForm(form){
  var yanzhengma=111;//仅作测试用
  var $tel=$(form+" .zdTel");
  var $reg=$(form+" .zdReg");
  var $userName=$(form+" .zdUserName");
  var $pwd=$(form+" .zdPwd");
  var $apwd=$(form+" .zdAgainPwd");
  var $email=$(form+" .zdEmail");
  var $chec=$(form+" .zdChec");
  var $sub=$(form+" .zdSub");

  $sub.on('click',function(){    
    if($tel.length>0){
      if(!$.telReg($tel.val())){
        $tel.parents(".form-group ").find(".prompt").remove();
        $tel.focus();
        $tel.parents(".form-group ").append(erroDate("erroTel")).addClass('error');
        return false;
      }
      else{
         $tel.parents(".form-group ").addClass('succ');
      }
    }
    if($email.length>0){
      if(!$.emailReg($email.val())){
        $email.parents(".form-group ").find(".prompt").remove();
        $email.focus();
        $email.parents(".form-group ").append(erroDate("erroEmail")).addClass('error');
        return false;
      }
      else{
        alert(2);
         $email.parents(".form-group ").addClass('succ');
      }
    }
    if($reg.length>0){
      if($reg.val()!=yanzhengma){
        $reg.parents(".form-group ").find(".prompt").remove();
        $reg.focus();
        $reg.parents(".form-group ").append(erroDate("erroReg")).addClass('error');
        return false;
      }
      else{
         $reg.parents(".form-group ").addClass('succ');
      }
    }
    if($userName.length>0){
      if(!$userName.val()){
        $userName.parents(".form-group ").find(".prompt").remove();
        $userName.focus();
        $userName.parents(".form-group ").append(erroDate("erroUserName")).addClass('error');
        return false;
      }
       else{
         $userName.parents(".form-group ").addClass('succ');
      }
    }
    if($pwd.length>0){
      if(!$.pwdReg($pwd.val())){
        $pwd.parents(".form-group ").find(".prompt").remove();
        $pwd.focus();
        $pwd.parents(".form-group ").append(erroDate("erroPwd")).addClass('error');
        return false;
      }
      else{
         $pwd.parents(".form-group ").addClass('succ');
      }
    }
    if($apwd.length>0){
      if($apwd.val()!=$pwd.val()){
        $apwd.parents(".form-group ").find(".prompt").remove();
        $apwd.focus();
        $apwd.parents(".form-group ").append(erroDate("erroAgainPwd")).addClass('error');
        return false;
      }
      else{
         $apwd.parents(".form-group ").addClass('succ');
      }
    }
    if($chec.length>0){
      if(!$chec.prop('checked')){
        $chec.parents(".form-group ").find(".prompt").remove();
        $chec.focus();
        $chec.parents(".form-group ").append(erroDate("erroCheck")).addClass('error');
        return false;
      }
      else{
         $chec.parents(".form-group ").addClass('succ');
      }
    }

    return true;

  })
  $(form+" .req").on('input propertychange',function(){
     $(this).parents(".form-group ").removeClass('error');
     $(this).parents(".form-group ").find(".prompt").remove();
  });
}
// 表单验证组件调用方式为validateForm("dom元素带id调用或类前缀之类的")

    $("#real-name .uploads").each(function(index,el){
   var fileUl=document.getElementById('real-name');
   var file=fileUl.getElementsByClassName('uploads')[index];
   file.getElementsByTagName('input')[0].onchange=function(){
  var fileList = this.files; 
  var imgObjPreview = this.parentNode.getElementsByTagName('img')[0];
    if (this.files && this.files[0]) {
    //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
    imgObjPreview.src = window.URL.createObjectURL(this.files[0]);
    var spanReal=this.parentNode.parentNode.getElementsByTagName("span")[0];
    var buttonReal=this.parentNode.parentNode.getElementsByTagName("button")[0];
    var divReal=this.parentNode.parentNode;
    var onc=$(this).parents(".uploads").find(".upload-btn");
    // buttonReal.hide();
    
    if(spanReal){spanReal.remove();}
    onc.html("重新上传");
    onc.addClass('resetBtn col-lg-6').removeClass('form-control');
    $(this).parents('.form-group').append(onc);   
    }
    else {
    //IE下，使用滤镜
    this.select();
    var imgSrc=this.value;    //这里的imgsrc地址直接拿的input的
    var localImagId = this.parentNode.getElementsByTagName('img')[0];
    
    //图片异常的捕捉，防止用户修改后缀来伪造图片

    try {
    localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";

    localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
    imgObjPreview.src=imgSrc;

    }
    catch (e) {

    alert("您上传的图片格式不正确，请重新选择!");

    return false;

    }
    document.selection.empty();

    }
    return true;
   }
});
    // 上面是实名认证页面的上传图片
 $(".btn-group .dropdown-menu li").click(function(){
     var downText=$(this).text();
     var html=""+downText+"    <i class='iconfont font16'>&#xe623;</i>";
     $(this).parents(".btn-group").find(".dropdown-toggle").html(html);
})
 // 顶部下拉三角
   $(".zd-checkbox").click(function(){
    if($(this).find('input').prop('checked')){
      $(this).find('input').prop('checked',false);
      $(this).removeClass('check-a');
    }
    else{
       $(this).find('input').prop('checked',true);
      $(this).addClass('check-a');
    }
  })
   // checkbox选择
   $(".zd-list .other .autor").hover(function(){
      $(this).parents(".other").find(".authorTip").fadeIn(300);
    },function(){
      $(this).parents(".other").find(".authorTip").fadeOut(300);
    })
   // 艺术家信息页面作者信息鼠划效果
   var zdListMargin=parseInt($(".zd-list-li").css("marginLeft"));
    if(zdListMargin<10){
      $(".zd-list-li").css("margin","15px 15px");
    }
    // 设置user_info页面的列表，当间距小于10px的时候其四周的边距为15px
    $(".right-article .zd-checkbox input[type='checkbox']").on('click',function(){
        if($(this).prop('checked')){
          $(this).parents(".form-group").find("input[type='text']").prop("disabled",false);
        }
        else{
          $(this).parents(".form-group").find("input[type='text']").prop("disabled",true).val("");
        }
     })
    // 我的信息页面，当选则长期有效后设置前面的文本框不可输入并清空

  $("#newFiles").on('click',function(){
    var reid=$(this).attr('rel');
    $("#exampleModal .modal-body form").attr('action',reid);
    $("#exampleModal").modal();
  });
  //上传作品页面--新建·一个作品页的模态窗口
   $("#create_group").click(function() {
   $.ajax({
     url: 'index.php',
     type: 'post',
     dataType: 'json',
     success:function(data){
        $("<option id='"+data.option.id+"' value='"+data.option.id+"'>"+data.option.name+"</option>").appendTo('#addSelectFile');
        $("#addSelectFile").attr("value",data.option.id);
        $('#addSelectFile').val(data.option.id);
     }
   })
  });
  // 上传作品页面--新建一个作品页选择后发送到后端，返回值传到select，并设置为默认
  function upload(upload,input,method,nub,size){
     var uploadArry=[];
     $("#"+upload).uploadify({
         swf           : '/swf/uploadify.swf',
         uploader      : method,
         'auto': true,
         multi:false,
         'checkExisting':false,
         'fileTypeExts': '*.jpg;*.jpeg;*.gif;*.png',
         'uploadLimit':nub,
         'onUploadStart':function(){
                       var imgsrc=$(this).parents(".form-group").find("img").attr('src');
                        var ind=uploadArry.indexOf(imgsrc);                                             
                        uploadArry.splice(ind,1);                        
                        $(this).parents(".uploadsinImg").addClass('hidden').html('');                         
                        $("#"+input).val(uploadArry);
                        var swfu = $('#'+upload).data('uploadify');
                        var stats = swfu.getStats();
                        stats["successful_uploads"]--;
                        swfu.setStats(stats); 
          },
         'onUploadSuccess':function(file,data,response){
             $.unique(uploadArry);
             var data = JSON.parse(data);
             uploadArry.push(data.result.savePath);
             $("#"+input).val(uploadArry);
             var html="<div class='col-lg-"+size+" col-md-"+size+" col-sm-"+size+"  pl upimgs col-xs-12'><img src='"+data.result.savePath+"' alt=''/><div class='removeImages'><i class='iconfont'>&#xe635;</i></div><div class='state success'>上传成功</div></div>";
             $("#"+upload).parents('.form-group').find('.uploadsinImg').removeClass('hidden').html(html).siblings('.tip').hide();
              $("#"+upload).find('button').html('<i class="iconfont font14">&#xe608;</i>重新上传...');
             $("#"+upload).parents('.form-group').find(".removeImages").on('click',function(){
                        var imgsrc=$(this).parents(".form-group").find("img").attr('src');
                        var ind=uploadArry.indexOf(imgsrc);                                             
                        uploadArry.splice(ind,1);                        
                        $(this).parents(".uploadsinImg").addClass('hidden').html('');                         
                        $("#"+input).val(uploadArry);
                        var swfu = $('#'+upload).data('uploadify');
                        var stats = swfu.getStats();
                        stats["successful_uploads"]--;
                        swfu.setStats(stats); 
             })
            
          },
           'onSelectError':function(file, errorCode, errorMsg){
                     switch(errorCode) {                      
                         case -100:
                              alert("文件数量超出系统限制,最多上传"+nub+'个！');
                              break;                               
                     }
                 }

     });
  }
  // 可共用的单个图上传预览，接口为(按钮id，隐藏文本域id，post目标文件，最大数量)
var creationArry={
"dynasty": [
{ "id":1 , "name":"秦朝" },
{ "id":"2" , "name":"汉朝" }
],
"s": [
{ "id":3 , "name":"80年代" },
{ "id":"4" , "name":"90年代" }
],
"century": [
{ "id":5 , "name":"21世纪" },
{ "id":"6" , "name":"22世纪" }
]
};
// json数据为创作年代的数据，模拟演示用，
$("#creation .zd-radio").click(function() {
  $("#creations").empty();
   var zdRadio=$(this).find('input[type="radio"]').val();
    $.each(creationArry,function(i,d){
       if(zdRadio==i){
        $.each(creationArry[i],function(index, el) {
          $.unique($("#creations"));
          $("<option id='creation_"+creationArry[i][index]['id']+"'>"+creationArry[i][index]['name']+"</option>").appendTo('#creations');
          $('#creations').parent().siblings('.tip').remove();     
          $('#creations').parents('.form-group').find('label:last').attr('class','radio-inline col-lg-4 col-md-4 col-sm-4  col-xs-12 zd-radio');
           $('#creations').parent().removeClass('hidden').css('marginTop','10px');        
        });
       }
    });     
});
// 上传作品页面的调用json取值

   $("#argu-btn").on('click',function(){
     var reid=$(this).attr('rel');
     $("#reg-arguee .modal-body form").attr('action',reid);
     $("#reg-arguee").modal();
     $("#arguee-sub").on('click',function(){
        $("#reg-arguee").modal('hide'); 
     })
   });
 // 手机注册页面查看用户协议的模态窗口
$("#art-type").change(function(event) {
  var valText=$(this).val();
     switch(valText){
      // #appearance  品相id
      // #information 版本信息
      // .long  长
      // .width 宽
      // .height 高度
      // .length 时长
      // #seal 印章
      // #signature 艺术家签名
      // #farmed  装裱状态
         case '1'||'3'||'4':
         $("#information,.height,.length,#seal").addClass('hidden');
         $("#appearance,.long,.width,#signature,#farmed").removeClass('hidden');
         break;
         case '2'||'7'||'10':
         $(".height,.length,#seal").addClass('hidden');
         $("#appearance,.long,.width,#signature,#farmed,#information").removeClass('hidden');
         break;
        case '5':
         $(".height,.length,#signature").addClass('hidden');
         $("#seal,#appearance,.long,.width,,#farmed,#information").removeClass('hidden');
         break;
         case '6':
        $("#seal,#farmed").addClass('hidden');
         $(".height,.length,#information,#appearance,.long,.width,#signature").removeClass('hidden');
         break;
         case '8':
         $("#appearance,.long,.width,.height,#seal,#farmed").addClass('hidden');
         $(".length,#information,#signature").removeClass('hidden');
         break;
         case '9'||'11':
         $(".length,#seal").addClass('hidden');
         $("#information,#appearance,.height,.long,.width,#signature,#farmed").removeClass('hidden');
         break;
     }
});
$("#art-source").change(function(){
   var valText=$(this).val();
   var $parents=$("#art-source").parents('.form-group');
     switch(valText){
         case '0':
         $parents.find(".line-div").addClass('hidden');
         $parents.find("input").val('');
         break;
         case '1':
         $parents.find(".line-div").removeClass('hidden');
         $parents.find(".shopTime").find('.tl').text('自创时间');
         $parents.find(".shopPrice").find('.tl').text('自创价格');
         $parents.find(".shopObj").find('.tl').text('自创对象');
         $parents.find(".shopPic").find('.tl').text('相关附件照片');
         break;
         case '2':
         $parents.find(".line-div").removeClass('hidden');
         $parents.find(".shopTime").find('.tl').text('购买时间');
         $parents.find(".shopPrice").find('.tl').text('购买价格');
         $parents.find(".shopObj").find('.tl').text('购买对象');
         $parents.find(".shopPic").find('.tl').text('相关附件照片');
         break;
         case '3':
         $parents.find(".line-div").removeClass('hidden');
         $parents.find(".shopTime").find('.tl').text('获赠时间');
         $parents.find(".shopPrice").find('.tl').text('获赠价格');
         $parents.find(".shopObj").find('.tl').text('获赠对象');
         $parents.find(".shopPic").find('.tl').text('相关附件照片');
         break;
         case '4':
         $parents.find(".line-div").removeClass('hidden');
         $parents.find(".shopTime").find('.tl').text('借进时间');
         $parents.find(".shopPrice").find('.tl').text('借进价格');
         $parents.find(".shopObj").find('.tl').text('借进对象');
         $parents.find(".shopPic").find('.tl').text('相关附件照片');
         break;
     }
})
$("#art-status").change(function(){
   var valText=$(this).val();
   var $parents=$("#art-status").parents('.form-group');
     switch(valText){
         case '0':
         $parents.find(".line-div").addClass('hidden');
         $parents.find("input").val('');
         break;
         case '1':
         $parents.find(".status-address,.status-price").removeClass('hidden');
         $parents.find(".status-purpose,.status-pic").addClass('hidden');
         $parents.find(".status-address").find('.tl').text('在库位置');
         $parents.find(".status-price").find('.tl').text('购买价格');
         break;
         case '2':
         $parents.find(".status-address,.status-price,.status-purpose,.status-pic").removeClass('hidden');
         $parents.find(".status-address").find('.tl').text('售出时间');
         $parents.find(".status-price").find('.tl').text('售出价格');
         $parents.find(".status-purpose").find('.tl').text('售出对象');
         $parents.find(".status-pic").find('.tl').text('相关附件');
         break;
         case '3':
         $parents.find(".status-address,.status-price,.status-purpose,.status-pic").removeClass('hidden');
         $parents.find(".status-address").find('.tl').text('赠出时间');
         $parents.find(".status-price").find('.tl').text('赠出对象');
         $parents.find(".status-purpose").find('.tl').text('赠出目的');
         $parents.find(".status-pic").find('.tl').text('相关附件');
         break;
         case '4':
        $parents.find(".status-address,.status-price,.status-purpose,.status-pic").removeClass('hidden');
         $parents.find(".status-address").find('.tl').text('借出时间');
         $parents.find(".status-price").find('.tl').text('借出对象');
         $parents.find(".status-purpose").find('.tl').text('借出目的');
         $parents.find(".status-pic").find('.tl').text('相关附件');
         break;
     }
})
$("#real-name .zd-radio").on('click',function(){
  $("#real-name input[type='radio']").each(function(){
  if($("#inlineRadio2").prop('checked')){
     $(".artInfo").addClass('hidden');
  }
   if($("#inlineRadio3").prop('checked')){
     $(".artInfo").removeClass('hidden');
  }
})
})
// 上传作品页面状态，来源，艺术品分类,艺术品作者区分,的联动js
/*
SWFObject v2.2 <http://code.google.com/p/swfobject/> 
is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
;var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;
if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;
X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);
ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0;}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");
if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)];}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac};
}(),k=function(){if(!M.w3){return;}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f();
}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false);}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);
f();}});if(O==top){(function(){if(J){return;}try{j.documentElement.doScroll("left");}catch(X){setTimeout(arguments.callee,0);return;}f();})();}}if(M.wk){(function(){if(J){return;
}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return;}f();})();}s(f);}}();function f(){if(J){return;}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));
Z.parentNode.removeChild(Z);}catch(aa){return;}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]();}}function K(X){if(J){X();}else{U[U.length]=X;}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false);
}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false);}else{if(typeof O.attachEvent!=D){i(O,"onload",Y);}else{if(typeof O.onload=="function"){var X=O.onload;
O.onload=function(){X();Y();};}else{O.onload=Y;}}}}}function h(){if(T){V();}else{H();}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);
aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");
M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)];}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return;}}X.removeChild(aa);Z=null;H();
})();}else{H();}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);
if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa);}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;
ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class");}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align");
}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value");
}}P(ai,ah,Y,ab);}else{p(ae);if(ab){ab(aa);}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z;}ab(aa);}}}}}function z(aa){var X=null;
var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y;}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z;}}}return X;}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312);
}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null;}else{l=ae;Q=X;}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310";
}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137";}j.title=j.title.slice(0,47)+" - Flash Player Installation";
var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac;
}else{ab.flashvars=ac;}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";
(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae);}else{setTimeout(arguments.callee,10);}})();}u(aa,ab,X);}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");
Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y);}else{setTimeout(arguments.callee,10);
}})();}else{Y.parentNode.replaceChild(g(Y),Y);}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML;}else{var Y=ab.getElementsByTagName(r)[0];
if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true));
}}}}}return aa;}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X;}if(aa){if(typeof ai.id==D){ai.id=Y;}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae];
}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"';}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"';}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />';
}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id);}else{var Z=C(r);Z.setAttribute("type",q);
for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac]);}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac]);
}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab]);}}aa.parentNode.replaceChild(Z,aa);X=Z;}}return X;}function e(Z,X,Y){var aa=C("param");
aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa);}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";
(function(){if(X.readyState==4){b(Y);}else{setTimeout(arguments.callee,10);}})();}else{X.parentNode.removeChild(X);}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null;
}}Y.parentNode.removeChild(Y);}}function c(Z){var X=null;try{X=j.getElementById(Z);}catch(Y){}return X;}function C(X){return j.createElement(X);}function i(Z,X,Y){Z.attachEvent(X,Y);
I[I.length]=[Z,X,Y];}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false;
}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return;}var aa=j.getElementsByTagName("head")[0];if(!aa){return;}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;
G=null;}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1];
}G=X;}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y);}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"));
}}}function w(Z,X){if(!m){return;}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y;}else{v("#"+Z,"visibility:"+Y);}}function L(Y){var Z=/[\\\"<>\.;]/;
var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y;}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;
for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2]);}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa]);}for(var Y in M){M[Y]=null;}M=null;for(var X in swfobject){swfobject[X]=null;
}swfobject=null;});}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;
w(ab,false);}else{if(Z){Z({success:false,id:ab});}}},getObjectById:function(X){if(M.w3){return z(X);}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};
if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al];}}aj.data=ab;
aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak];}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai];
}else{am.flashvars=ai+"="+Z[ai];}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true);}X.success=true;X.ref=an;}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);
return;}else{w(ah,true);}}if(ac){ac(X);}});}else{if(ac){ac(X);}}},switchOffAutoHideShow:function(){m=false;},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]};
},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X);}else{return undefined;}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y);
}},removeSWF:function(X){if(M.w3){y(X);}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X);}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;
if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1];}if(aa==null){return L(Z);}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)));
}}}return"";},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block";
}}if(E){E(B);}}a=false;}}};}();

/*
SWFUpload: http://www.swfupload.org, http://swfupload.googlecode.com

mmSWFUpload 1.0: Flash upload dialog - http://profandesign.se/swfupload/,  http://www.vinterwebb.se/

SWFUpload is (c) 2006-2007 Lars Huring, Olov Nilzén and Mammon Media and is released under the MIT License:
http://www.opensource.org/licenses/mit-license.php
 
SWFUpload 2 is (c) 2007-2008 Jake Roberts and is released under the MIT License:
http://www.opensource.org/licenses/mit-license.php
*/

var SWFUpload;if(SWFUpload==undefined){SWFUpload=function(a){this.initSWFUpload(a)}}SWFUpload.prototype.initSWFUpload=function(b){try{this.customSettings={};this.settings=b;this.eventQueue=[];this.movieName="SWFUpload_"+SWFUpload.movieCount++;this.movieElement=null;SWFUpload.instances[this.movieName]=this;this.initSettings();this.loadFlash();this.displayDebugInfo()}catch(a){delete SWFUpload.instances[this.movieName];throw a}};SWFUpload.instances={};SWFUpload.movieCount=0;SWFUpload.version="2.2.0 2009-03-25";SWFUpload.QUEUE_ERROR={QUEUE_LIMIT_EXCEEDED:-100,FILE_EXCEEDS_SIZE_LIMIT:-110,ZERO_BYTE_FILE:-120,INVALID_FILETYPE:-130};SWFUpload.UPLOAD_ERROR={HTTP_ERROR:-200,MISSING_UPLOAD_URL:-210,IO_ERROR:-220,SECURITY_ERROR:-230,UPLOAD_LIMIT_EXCEEDED:-240,UPLOAD_FAILED:-250,SPECIFIED_FILE_ID_NOT_FOUND:-260,FILE_VALIDATION_FAILED:-270,FILE_CANCELLED:-280,UPLOAD_STOPPED:-290};SWFUpload.FILE_STATUS={QUEUED:-1,IN_PROGRESS:-2,ERROR:-3,COMPLETE:-4,CANCELLED:-5};SWFUpload.BUTTON_ACTION={SELECT_FILE:-100,SELECT_FILES:-110,START_UPLOAD:-120};SWFUpload.CURSOR={ARROW:-1,HAND:-2};SWFUpload.WINDOW_MODE={WINDOW:"window",TRANSPARENT:"transparent",OPAQUE:"opaque"};SWFUpload.completeURL=function(a){if(typeof(a)!=="string"||a.match(/^https?:\/\//i)||a.match(/^\//)){return a}var c=window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:"");var b=window.location.pathname.lastIndexOf("/");if(b<=0){path="/"}else{path=window.location.pathname.substr(0,b)+"/"}return path+a};SWFUpload.prototype.initSettings=function(){this.ensureDefault=function(b,a){this.settings[b]=(this.settings[b]==undefined)?a:this.settings[b]};this.ensureDefault("upload_url","");this.ensureDefault("preserve_relative_urls",false);this.ensureDefault("file_post_name","Filedata");this.ensureDefault("post_params",{});this.ensureDefault("use_query_string",false);this.ensureDefault("requeue_on_error",false);this.ensureDefault("http_success",[]);this.ensureDefault("assume_success_timeout",0);this.ensureDefault("file_types","*.*");this.ensureDefault("file_types_description","All Files");this.ensureDefault("file_size_limit",0);this.ensureDefault("file_upload_limit",0);this.ensureDefault("file_queue_limit",0);this.ensureDefault("flash_url","swfupload.swf");this.ensureDefault("prevent_swf_caching",true);this.ensureDefault("button_image_url","");this.ensureDefault("button_width",1);this.ensureDefault("button_height",1);this.ensureDefault("button_text","");this.ensureDefault("button_text_style","color: #000000; font-size: 16pt;");this.ensureDefault("button_text_top_padding",0);this.ensureDefault("button_text_left_padding",0);this.ensureDefault("button_action",SWFUpload.BUTTON_ACTION.SELECT_FILES);this.ensureDefault("button_disabled",false);this.ensureDefault("button_placeholder_id","");this.ensureDefault("button_placeholder",null);this.ensureDefault("button_cursor",SWFUpload.CURSOR.ARROW);this.ensureDefault("button_window_mode",SWFUpload.WINDOW_MODE.WINDOW);this.ensureDefault("debug",false);this.settings.debug_enabled=this.settings.debug;this.settings.return_upload_start_handler=this.returnUploadStart;this.ensureDefault("swfupload_loaded_handler",null);this.ensureDefault("file_dialog_start_handler",null);this.ensureDefault("file_queued_handler",null);this.ensureDefault("file_queue_error_handler",null);this.ensureDefault("file_dialog_complete_handler",null);this.ensureDefault("upload_start_handler",null);this.ensureDefault("upload_progress_handler",null);this.ensureDefault("upload_error_handler",null);this.ensureDefault("upload_success_handler",null);this.ensureDefault("upload_complete_handler",null);this.ensureDefault("debug_handler",this.debugMessage);this.ensureDefault("custom_settings",{});this.customSettings=this.settings.custom_settings;if(!!this.settings.prevent_swf_caching){this.settings.flash_url=this.settings.flash_url+(this.settings.flash_url.indexOf("?")<0?"?":"&")+"preventswfcaching="+new Date().getTime()}if(!this.settings.preserve_relative_urls){this.settings.upload_url=SWFUpload.completeURL(this.settings.upload_url);this.settings.button_image_url=SWFUpload.completeURL(this.settings.button_image_url)}delete this.ensureDefault};SWFUpload.prototype.loadFlash=function(){var a,b;if(document.getElementById(this.movieName)!==null){throw"ID "+this.movieName+" is already in use. The Flash Object could not be added"}a=document.getElementById(this.settings.button_placeholder_id)||this.settings.button_placeholder;if(a==undefined){throw"Could not find the placeholder element: "+this.settings.button_placeholder_id}b=document.createElement("div");b.innerHTML=this.getFlashHTML();a.parentNode.replaceChild(b.firstChild,a);if(window[this.movieName]==undefined){window[this.movieName]=this.getMovieElement()}};SWFUpload.prototype.getFlashHTML=function(){return['<object id="',this.movieName,'" type="application/x-shockwave-flash" data="',this.settings.flash_url,'" width="',this.settings.button_width,'" height="',this.settings.button_height,'" class="swfupload">','<param name="wmode" value="',this.settings.button_window_mode,'" />','<param name="movie" value="',this.settings.flash_url,'" />','<param name="quality" value="high" />','<param name="menu" value="false" />','<param name="allowScriptAccess" value="always" />','<param name="flashvars" value="'+this.getFlashVars()+'" />',"</object>"].join("")};SWFUpload.prototype.getFlashVars=function(){var b=this.buildParamString();var a=this.settings.http_success.join(",");return["movieName=",encodeURIComponent(this.movieName),"&amp;uploadURL=",encodeURIComponent(this.settings.upload_url),"&amp;useQueryString=",encodeURIComponent(this.settings.use_query_string),"&amp;requeueOnError=",encodeURIComponent(this.settings.requeue_on_error),"&amp;httpSuccess=",encodeURIComponent(a),"&amp;assumeSuccessTimeout=",encodeURIComponent(this.settings.assume_success_timeout),"&amp;params=",encodeURIComponent(b),"&amp;filePostName=",encodeURIComponent(this.settings.file_post_name),"&amp;fileTypes=",encodeURIComponent(this.settings.file_types),"&amp;fileTypesDescription=",encodeURIComponent(this.settings.file_types_description),"&amp;fileSizeLimit=",encodeURIComponent(this.settings.file_size_limit),"&amp;fileUploadLimit=",encodeURIComponent(this.settings.file_upload_limit),"&amp;fileQueueLimit=",encodeURIComponent(this.settings.file_queue_limit),"&amp;debugEnabled=",encodeURIComponent(this.settings.debug_enabled),"&amp;buttonImageURL=",encodeURIComponent(this.settings.button_image_url),"&amp;buttonWidth=",encodeURIComponent(this.settings.button_width),"&amp;buttonHeight=",encodeURIComponent(this.settings.button_height),"&amp;buttonText=",encodeURIComponent(this.settings.button_text),"&amp;buttonTextTopPadding=",encodeURIComponent(this.settings.button_text_top_padding),"&amp;buttonTextLeftPadding=",encodeURIComponent(this.settings.button_text_left_padding),"&amp;buttonTextStyle=",encodeURIComponent(this.settings.button_text_style),"&amp;buttonAction=",encodeURIComponent(this.settings.button_action),"&amp;buttonDisabled=",encodeURIComponent(this.settings.button_disabled),"&amp;buttonCursor=",encodeURIComponent(this.settings.button_cursor)].join("")};SWFUpload.prototype.getMovieElement=function(){if(this.movieElement==undefined){this.movieElement=document.getElementById(this.movieName)}if(this.movieElement===null){throw"Could not find Flash element"}return this.movieElement};SWFUpload.prototype.buildParamString=function(){var c=this.settings.post_params;var b=[];if(typeof(c)==="object"){for(var a in c){if(c.hasOwnProperty(a)){b.push(encodeURIComponent(a.toString())+"="+encodeURIComponent(c[a].toString()))}}}return b.join("&amp;")};SWFUpload.prototype.destroy=function(){try{this.cancelUpload(null,false);var a=null;a=this.getMovieElement();if(a&&typeof(a.CallFunction)==="unknown"){for(var c in a){try{if(typeof(a[c])==="function"){a[c]=null}}catch(e){}}try{a.parentNode.removeChild(a)}catch(b){}}window[this.movieName]=null;SWFUpload.instances[this.movieName]=null;delete SWFUpload.instances[this.movieName];this.movieElement=null;this.settings=null;this.customSettings=null;this.eventQueue=null;this.movieName=null;return true}catch(d){return false}};SWFUpload.prototype.displayDebugInfo=function(){this.debug(["---SWFUpload Instance Info---\n","Version: ",SWFUpload.version,"\n","Movie Name: ",this.movieName,"\n","Settings:\n","\t","upload_url:               ",this.settings.upload_url,"\n","\t","flash_url:                ",this.settings.flash_url,"\n","\t","use_query_string:         ",this.settings.use_query_string.toString(),"\n","\t","requeue_on_error:         ",this.settings.requeue_on_error.toString(),"\n","\t","http_success:             ",this.settings.http_success.join(", "),"\n","\t","assume_success_timeout:   ",this.settings.assume_success_timeout,"\n","\t","file_post_name:           ",this.settings.file_post_name,"\n","\t","post_params:              ",this.settings.post_params.toString(),"\n","\t","file_types:               ",this.settings.file_types,"\n","\t","file_types_description:   ",this.settings.file_types_description,"\n","\t","file_size_limit:          ",this.settings.file_size_limit,"\n","\t","file_upload_limit:        ",this.settings.file_upload_limit,"\n","\t","file_queue_limit:         ",this.settings.file_queue_limit,"\n","\t","debug:                    ",this.settings.debug.toString(),"\n","\t","prevent_swf_caching:      ",this.settings.prevent_swf_caching.toString(),"\n","\t","button_placeholder_id:    ",this.settings.button_placeholder_id.toString(),"\n","\t","button_placeholder:       ",(this.settings.button_placeholder?"Set":"Not Set"),"\n","\t","button_image_url:         ",this.settings.button_image_url.toString(),"\n","\t","button_width:             ",this.settings.button_width.toString(),"\n","\t","button_height:            ",this.settings.button_height.toString(),"\n","\t","button_text:              ",this.settings.button_text.toString(),"\n","\t","button_text_style:        ",this.settings.button_text_style.toString(),"\n","\t","button_text_top_padding:  ",this.settings.button_text_top_padding.toString(),"\n","\t","button_text_left_padding: ",this.settings.button_text_left_padding.toString(),"\n","\t","button_action:            ",this.settings.button_action.toString(),"\n","\t","button_disabled:          ",this.settings.button_disabled.toString(),"\n","\t","custom_settings:          ",this.settings.custom_settings.toString(),"\n","Event Handlers:\n","\t","swfupload_loaded_handler assigned:  ",(typeof this.settings.swfupload_loaded_handler==="function").toString(),"\n","\t","file_dialog_start_handler assigned: ",(typeof this.settings.file_dialog_start_handler==="function").toString(),"\n","\t","file_queued_handler assigned:       ",(typeof this.settings.file_queued_handler==="function").toString(),"\n","\t","file_queue_error_handler assigned:  ",(typeof this.settings.file_queue_error_handler==="function").toString(),"\n","\t","upload_start_handler assigned:      ",(typeof this.settings.upload_start_handler==="function").toString(),"\n","\t","upload_progress_handler assigned:   ",(typeof this.settings.upload_progress_handler==="function").toString(),"\n","\t","upload_error_handler assigned:      ",(typeof this.settings.upload_error_handler==="function").toString(),"\n","\t","upload_success_handler assigned:    ",(typeof this.settings.upload_success_handler==="function").toString(),"\n","\t","upload_complete_handler assigned:   ",(typeof this.settings.upload_complete_handler==="function").toString(),"\n","\t","debug_handler assigned:             ",(typeof this.settings.debug_handler==="function").toString(),"\n"].join(""))};SWFUpload.prototype.addSetting=function(b,c,a){if(c==undefined){return(this.settings[b]=a)}else{return(this.settings[b]=c)}};SWFUpload.prototype.getSetting=function(a){if(this.settings[a]!=undefined){return this.settings[a]}return""};SWFUpload.prototype.callFlash=function(functionName,argumentArray){argumentArray=argumentArray||[];var movieElement=this.getMovieElement();var returnValue,returnString;try{returnString=movieElement.CallFunction('<invoke name="'+functionName+'" returntype="javascript">'+__flash__argumentsToXML(argumentArray,0)+"</invoke>");returnValue=eval(returnString)}catch(ex){throw"Call to "+functionName+" failed"}if(returnValue!=undefined&&typeof returnValue.post==="object"){returnValue=this.unescapeFilePostParams(returnValue)}return returnValue};SWFUpload.prototype.selectFile=function(){this.callFlash("SelectFile")};SWFUpload.prototype.selectFiles=function(){this.callFlash("SelectFiles")};SWFUpload.prototype.startUpload=function(a){this.callFlash("StartUpload",[a])};SWFUpload.prototype.cancelUpload=function(a,b){if(b!==false){b=true}this.callFlash("CancelUpload",[a,b])};SWFUpload.prototype.stopUpload=function(){this.callFlash("StopUpload")};SWFUpload.prototype.getStats=function(){return this.callFlash("GetStats")};SWFUpload.prototype.setStats=function(a){this.callFlash("SetStats",[a])};SWFUpload.prototype.getFile=function(a){if(typeof(a)==="number"){return this.callFlash("GetFileByIndex",[a])}else{return this.callFlash("GetFile",[a])}};SWFUpload.prototype.addFileParam=function(a,b,c){return this.callFlash("AddFileParam",[a,b,c])};SWFUpload.prototype.removeFileParam=function(a,b){this.callFlash("RemoveFileParam",[a,b])};SWFUpload.prototype.setUploadURL=function(a){this.settings.upload_url=a.toString();this.callFlash("SetUploadURL",[a])};SWFUpload.prototype.setPostParams=function(a){this.settings.post_params=a;this.callFlash("SetPostParams",[a])};SWFUpload.prototype.addPostParam=function(a,b){this.settings.post_params[a]=b;this.callFlash("SetPostParams",[this.settings.post_params])};SWFUpload.prototype.removePostParam=function(a){delete this.settings.post_params[a];this.callFlash("SetPostParams",[this.settings.post_params])};SWFUpload.prototype.setFileTypes=function(a,b){this.settings.file_types=a;this.settings.file_types_description=b;this.callFlash("SetFileTypes",[a,b])};SWFUpload.prototype.setFileSizeLimit=function(a){this.settings.file_size_limit=a;this.callFlash("SetFileSizeLimit",[a])};SWFUpload.prototype.setFileUploadLimit=function(a){this.settings.file_upload_limit=a;this.callFlash("SetFileUploadLimit",[a])};SWFUpload.prototype.setFileQueueLimit=function(a){this.settings.file_queue_limit=a;this.callFlash("SetFileQueueLimit",[a])};SWFUpload.prototype.setFilePostName=function(a){this.settings.file_post_name=a;this.callFlash("SetFilePostName",[a])};SWFUpload.prototype.setUseQueryString=function(a){this.settings.use_query_string=a;this.callFlash("SetUseQueryString",[a])};SWFUpload.prototype.setRequeueOnError=function(a){this.settings.requeue_on_error=a;this.callFlash("SetRequeueOnError",[a])};SWFUpload.prototype.setHTTPSuccess=function(a){if(typeof a==="string"){a=a.replace(" ","").split(",")}this.settings.http_success=a;this.callFlash("SetHTTPSuccess",[a])};SWFUpload.prototype.setAssumeSuccessTimeout=function(a){this.settings.assume_success_timeout=a;this.callFlash("SetAssumeSuccessTimeout",[a])};SWFUpload.prototype.setDebugEnabled=function(a){this.settings.debug_enabled=a;this.callFlash("SetDebugEnabled",[a])};SWFUpload.prototype.setButtonImageURL=function(a){if(a==undefined){a=""}this.settings.button_image_url=a;this.callFlash("SetButtonImageURL",[a])};SWFUpload.prototype.setButtonDimensions=function(c,a){this.settings.button_width=c;this.settings.button_height=a;var b=this.getMovieElement();if(b!=undefined){b.style.width=c+"px";b.style.height=a+"px"}this.callFlash("SetButtonDimensions",[c,a])};SWFUpload.prototype.setButtonText=function(a){this.settings.button_text=a;this.callFlash("SetButtonText",[a])};SWFUpload.prototype.setButtonTextPadding=function(b,a){this.settings.button_text_top_padding=a;this.settings.button_text_left_padding=b;this.callFlash("SetButtonTextPadding",[b,a])};SWFUpload.prototype.setButtonTextStyle=function(a){this.settings.button_text_style=a;this.callFlash("SetButtonTextStyle",[a])};SWFUpload.prototype.setButtonDisabled=function(a){this.settings.button_disabled=a;this.callFlash("SetButtonDisabled",[a])};SWFUpload.prototype.setButtonAction=function(a){this.settings.button_action=a;this.callFlash("SetButtonAction",[a])};SWFUpload.prototype.setButtonCursor=function(a){this.settings.button_cursor=a;this.callFlash("SetButtonCursor",[a])};SWFUpload.prototype.queueEvent=function(b,c){if(c==undefined){c=[]}else{if(!(c instanceof Array)){c=[c]}}var a=this;if(typeof this.settings[b]==="function"){this.eventQueue.push(function(){this.settings[b].apply(this,c)});setTimeout(function(){a.executeNextEvent()},0)}else{if(this.settings[b]!==null){throw"Event handler "+b+" is unknown or is not a function"}}};SWFUpload.prototype.executeNextEvent=function(){var a=this.eventQueue?this.eventQueue.shift():null;if(typeof(a)==="function"){a.apply(this)}};SWFUpload.prototype.unescapeFilePostParams=function(c){var e=/[$]([0-9a-f]{4})/i;var f={};var d;if(c!=undefined){for(var a in c.post){if(c.post.hasOwnProperty(a)){d=a;var b;while((b=e.exec(d))!==null){d=d.replace(b[0],String.fromCharCode(parseInt("0x"+b[1],16)))}f[d]=c.post[a]}}c.post=f}return c};SWFUpload.prototype.testExternalInterface=function(){try{return this.callFlash("TestExternalInterface")}catch(a){return false}};SWFUpload.prototype.flashReady=function(){var a=this.getMovieElement();if(!a){this.debug("Flash called back ready but the flash movie can't be found.");return}this.cleanUp(a);this.queueEvent("swfupload_loaded_handler")};SWFUpload.prototype.cleanUp=function(a){try{if(this.movieElement&&typeof(a.CallFunction)==="unknown"){this.debug("Removing Flash functions hooks (this should only run in IE and should prevent memory leaks)");for(var c in a){try{if(typeof(a[c])==="function"){a[c]=null}}catch(b){}}}}catch(d){}window.__flash__removeCallback=function(e,f){try{if(e){e[f]=null}}catch(g){}}};SWFUpload.prototype.fileDialogStart=function(){this.queueEvent("file_dialog_start_handler")};SWFUpload.prototype.fileQueued=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("file_queued_handler",a)};SWFUpload.prototype.fileQueueError=function(a,c,b){a=this.unescapeFilePostParams(a);this.queueEvent("file_queue_error_handler",[a,c,b])};SWFUpload.prototype.fileDialogComplete=function(b,c,a){this.queueEvent("file_dialog_complete_handler",[b,c,a])};SWFUpload.prototype.uploadStart=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("return_upload_start_handler",a)};SWFUpload.prototype.returnUploadStart=function(a){var b;if(typeof this.settings.upload_start_handler==="function"){a=this.unescapeFilePostParams(a);b=this.settings.upload_start_handler.call(this,a)}else{if(this.settings.upload_start_handler!=undefined){throw"upload_start_handler must be a function"}}if(b===undefined){b=true}b=!!b;this.callFlash("ReturnUploadStart",[b])};SWFUpload.prototype.uploadProgress=function(a,c,b){a=this.unescapeFilePostParams(a);this.queueEvent("upload_progress_handler",[a,c,b])};SWFUpload.prototype.uploadError=function(a,c,b){a=this.unescapeFilePostParams(a);this.queueEvent("upload_error_handler",[a,c,b])};SWFUpload.prototype.uploadSuccess=function(b,a,c){b=this.unescapeFilePostParams(b);this.queueEvent("upload_success_handler",[b,a,c])};SWFUpload.prototype.uploadComplete=function(a){a=this.unescapeFilePostParams(a);this.queueEvent("upload_complete_handler",a)};SWFUpload.prototype.debug=function(a){this.queueEvent("debug_handler",a)};SWFUpload.prototype.debugMessage=function(c){if(this.settings.debug){var a,d=[];if(typeof c==="object"&&typeof c.name==="string"&&typeof c.message==="string"){for(var b in c){if(c.hasOwnProperty(b)){d.push(b+": "+c[b])}}a=d.join("\n")||"";d=a.split("\n");a="EXCEPTION: "+d.join("\nEXCEPTION: ");SWFUpload.Console.writeLine(a)}else{SWFUpload.Console.writeLine(c)}}};SWFUpload.Console={};SWFUpload.Console.writeLine=function(d){var b,a;try{b=document.getElementById("SWFUpload_Console");if(!b){a=document.createElement("form");document.getElementsByTagName("body")[0].appendChild(a);b=document.createElement("textarea");b.id="SWFUpload_Console";b.style.fontFamily="monospace";b.setAttribute("wrap","off");b.wrap="off";b.style.overflow="auto";b.style.width="700px";b.style.height="350px";b.style.margin="5px";a.appendChild(b)}b.value+=d+"\n";b.scrollTop=b.scrollHeight-b.clientHeight}catch(c){alert("Exception: "+c.name+" Message: "+c.message)}};

/*
Uploadify v3.2.1
Copyright (c) 2012 Reactive Apps, Ronnie Garcia
Released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var zdUpw,zdUph;
 if($(".upload-btn")){
       zdUpw=$(".upload-btn").width();
       zdUph=$(".upload-btn").height();
   }
   var jlhtml='<i class="iconfont font14">&#xe608;</i>上传图片...';
(function($) {

	// These methods can be called by adding them as the first argument in the uploadify plugin call
	var methods = {

		init : function(options, swfUploadOptions) {
			
			return this.each(function() {

				// Create a reference to the jQuery DOM object
				var $this = $(this);

				// Clone the original DOM object
				var $clone = $this.clone();

				// Setup the default options
				var settings = $.extend({
					// Required Settings
					id       : $this.attr('id'), // The ID of the DOM object
					swf      : 'uploadify.swf',  // The path to the uploadify SWF file
					uploader : 'uploadify.php',  // The path to the server-side upload script
					
					// Options
					auto            : true,               // Automatically upload files when added to the queue
					buttonClass     : '',                 // A class name to add to the browse button DOM object
					buttonCursor    : 'hand',             // The cursor to use with the browse button
					buttonImage     : null,               // (String or null) The path to an image to use for the Flash browse button if not using CSS to style the button
					buttonText      : jlhtml,     // The text to use for the browse button
					checkExisting   : false,              // The path to a server-side script that checks for existing files on the server
					debug           : false,              // Turn on swfUpload debugging mode
					fileObjName     : 'Filedata',         // The name of the file object to use in your server-side script
					fileSizeLimit   : 0,                  // The maximum size of an uploadable file in KB (Accepts units B KB MB GB if string, 0 for no limit)
					fileTypeDesc    : 'All Files',        // The description for file types in the browse dialog
					fileTypeExts    : '*.*',              // Allowed extensions in the browse dialog (server-side validation should also be used)
					height          : 35,                 // The height of the browse button
					itemTemplate    : false,              // The template for the file item in the queue
					method          : 'post',             // The method to use when sending files to the server-side upload script
					multi           : true,               // Allow multiple file selection in the browse dialog
					formData        : {},                 // An object with additional data to send to the server-side upload script with every file upload
					preventCaching  : true,               // Adds a random value to the Flash URL to prevent caching of it (conflicts with existing parameters)
					progressData    : 'percentage',       // ('percentage' or 'speed') Data to show in the queue item during a file upload
					queueID         : false,              // The ID of the DOM object to use as a file queue (without the #)
					queueSizeLimit  : 999,                // The maximum number of files that can be in the queue at one time
					removeCompleted : true,               // Remove queue items from the queue when they are done uploading
					removeTimeout   : 3,                  // The delay in seconds before removing a queue item if removeCompleted is set to true
					requeueErrors   : false,              // Keep errored files in the queue and keep trying to upload them
					successTimeout  : 30,                 // The number of seconds to wait for Flash to detect the server's response after the file has finished uploading
					uploadLimit     : 0,                  // The maximum number of files you can upload
					width           : 150,                // The width of the browse button
					
					// Events
					overrideEvents  : []             // (Array) A list of default event handlers to skip
					/*
					onCancel         // Triggered when a file is cancelled from the queue
					onClearQueue     // Triggered during the 'clear queue' method
					onDestroy        // Triggered when the uploadify object is destroyed
					onDialogClose    // Triggered when the browse dialog is closed
					onDialogOpen     // Triggered when the browse dialog is opened
					onDisable        // Triggered when the browse button gets disabled
					onEnable         // Triggered when the browse button gets enabled
					onFallback       // Triggered is Flash is not detected    
					onInit           // Triggered when Uploadify is initialized
					onQueueComplete  // Triggered when all files in the queue have been uploaded
					onSelectError    // Triggered when an error occurs while selecting a file (file size, queue size limit, etc.)
					onSelect         // Triggered for each file that is selected
					onSWFReady       // Triggered when the SWF button is loaded
					onUploadComplete // Triggered when a file upload completes (success or error)
					onUploadError    // Triggered when a file upload returns an error
					onUploadSuccess  // Triggered when a file is uploaded successfully
					onUploadProgress // Triggered every time a file progress is updated
					onUploadStart    // Triggered immediately before a file upload starts
					*/
				}, options);

				// Prepare settings for SWFUpload
				var swfUploadSettings = {
					assume_success_timeout   : settings.successTimeout,
					button_placeholder_id    : settings.id,
					button_width             : settings.width,
					button_height            : settings.height,
					button_text              : null,
					button_text_style        : null,
					button_text_top_padding  : 0,
					button_text_left_padding : 0,
					button_action            : (settings.multi ? SWFUpload.BUTTON_ACTION.SELECT_FILES : SWFUpload.BUTTON_ACTION.SELECT_FILE),
					button_disabled          : false,
					button_cursor            : (settings.buttonCursor == 'arrow' ? SWFUpload.CURSOR.ARROW : SWFUpload.CURSOR.HAND),
					button_window_mode       : SWFUpload.WINDOW_MODE.TRANSPARENT,
					debug                    : settings.debug,						
					requeue_on_error         : settings.requeueErrors,
					file_post_name           : settings.fileObjName,
					file_size_limit          : settings.fileSizeLimit,
					file_types               : settings.fileTypeExts,
					file_types_description   : settings.fileTypeDesc,
					file_queue_limit         : settings.queueSizeLimit,
					file_upload_limit        : settings.uploadLimit,
					flash_url                : settings.swf,					
					prevent_swf_caching      : settings.preventCaching,
					post_params              : settings.formData,
					upload_url               : settings.uploader,
					use_query_string         : (settings.method == 'get'),
					
					// Event Handlers 
					file_dialog_complete_handler : handlers.onDialogClose,
					file_dialog_start_handler    : handlers.onDialogOpen,
					file_queued_handler          : handlers.onSelect,
					file_queue_error_handler     : handlers.onSelectError,
					swfupload_loaded_handler     : settings.onSWFReady,
					upload_complete_handler      : handlers.onUploadComplete,
					upload_error_handler         : handlers.onUploadError,
					upload_progress_handler      : handlers.onUploadProgress,
					upload_start_handler         : handlers.onUploadStart,
					upload_success_handler       : handlers.onUploadSuccess
				}

				// Merge the user-defined options with the defaults
				if (swfUploadOptions) {
					swfUploadSettings = $.extend(swfUploadSettings, swfUploadOptions);
				}
				// Add the user-defined settings to the swfupload object
				swfUploadSettings = $.extend(swfUploadSettings, settings);
				
				// Detect if Flash is available
				var playerVersion  = swfobject.getFlashPlayerVersion();
				var flashInstalled = (playerVersion.major >= 9);

				if (flashInstalled) {
					// Create the swfUpload instance
					window['uploadify_' + settings.id] = new SWFUpload(swfUploadSettings);
					var swfuploadify = window['uploadify_' + settings.id];

					// Add the SWFUpload object to the elements data object
					$this.data('uploadify', swfuploadify);
					
					// Wrap the instance
					var $wrapper = $('<div />', {
						'id'    : settings.id,
						'class' : 'uploadify',
						'css'   : {
									'height'   : settings.height + 'px',
									'width'    : settings.width + 'px'
								  }
					});
					$('#' + swfuploadify.movieName).wrap($wrapper);
					// Recreate the reference to wrapper
					$wrapper = $('#' + settings.id);
					// Add the data object to the wrapper 
					$wrapper.data('uploadify', swfuploadify);

					// Create the button
					var $button = $('<div />', {
						'id'    : settings.id + '-button',
						'class' : 'uploadify-button' + settings.buttonClass
					});
					if (settings.buttonImage) {
						$button.css({
							'background-image' : "url('" + settings.buttonImage + "')",
							'text-indent'      : '-9999px'
						});
					}
					$button.html('<button class="uploadify-button-text btn file btn-default form-control upload-btn">' + settings.buttonText + '</button>')
					.css({
						'height'      : settings.height + 'px',
						'line-height' : settings.height + 'px',
						'width'       : settings.width + 'px'
					});
					// Append the button to the wrapper
					$wrapper.append($button);

					// Adjust the styles of the movie
					$('#' + swfuploadify.movieName).css({
						'position' : 'absolute',
						'z-index'  : 1
					});
					
					// Create the file queue
					if (!settings.queueID) {
						var $queue = $('<div />', {
							'id'    : settings.id + '-queue',
							'class' : 'uploadify-queue'
						});
						$wrapper.after($queue);
						swfuploadify.settings.queueID      = settings.id + '-queue';
						swfuploadify.settings.defaultQueue = true;
					}
					
					// Create some queue related objects and variables
					swfuploadify.queueData = {
						files              : {}, // The files in the queue
						filesSelected      : 0, // The number of files selected in the last select operation
						filesQueued        : 0, // The number of files added to the queue in the last select operation
						filesReplaced      : 0, // The number of files replaced in the last select operation
						filesCancelled     : 0, // The number of files that were cancelled instead of replaced
						filesErrored       : 0, // The number of files that caused error in the last select operation
						uploadsSuccessful  : 0, // The number of files that were successfully uploaded
						uploadsErrored     : 0, // The number of files that returned errors during upload
						averageSpeed       : 0, // The average speed of the uploads in KB
						queueLength        : 0, // The number of files in the queue
						queueSize          : 0, // The size in bytes of the entire queue
						uploadSize         : 0, // The size in bytes of the upload queue
						queueBytesUploaded : 0, // The size in bytes that have been uploaded for the current upload queue
						uploadQueue        : [], // The files currently to be uploaded
						errorMsg           : 'Some files were not added to the queue:'
					};

					// Save references to all the objects
					swfuploadify.original = $clone;
					swfuploadify.wrapper  = $wrapper;
					swfuploadify.button   = $button;
					swfuploadify.queue    = $queue;

					// Call the user-defined init event handler
					if (settings.onInit) settings.onInit.call($this, swfuploadify);

				} else {

					// Call the fallback function
					if (settings.onFallback) settings.onFallback.call($this);

				}
			});

		},

		// Stop a file upload and remove it from the queue 
		cancel : function(fileID, supressEvent) {

			var args = arguments;

			this.each(function() {
				// Create a reference to the jQuery DOM object
				var $this        = $(this),
					swfuploadify = $this.data('uploadify'),
					settings     = swfuploadify.settings,
					delay        = -1;

				if (args[0]) {
					// Clear the queue
					if (args[0] == '*') {
						var queueItemCount = swfuploadify.queueData.queueLength;
						$('#' + settings.queueID).find('.uploadify-queue-item').each(function() {
							delay++;
							if (args[1] === true) {
								swfuploadify.cancelUpload($(this).attr('id'), false);
							} else {
								swfuploadify.cancelUpload($(this).attr('id'));
							}
							$(this).find('.data').removeClass('data').html(' - Cancelled');
							$(this).find('.uploadify-progress-bar').remove();
							$(this).delay(1000 + 100 * delay).fadeOut(500, function() {
								$(this).remove();
							});
						});
						swfuploadify.queueData.queueSize   = 0;
						swfuploadify.queueData.queueLength = 0;
						// Trigger the onClearQueue event
						if (settings.onClearQueue) settings.onClearQueue.call($this, queueItemCount);
					} else {
						for (var n = 0; n < args.length; n++) {
							swfuploadify.cancelUpload(args[n]);
							$('#' + args[n]).find('.data').removeClass('data').html(' - Cancelled');
							$('#' + args[n]).find('.uploadify-progress-bar').remove();
							$('#' + args[n]).delay(1000 + 100 * n).fadeOut(500, function() {
								$(this).remove();
							});
						}
					}
				} else {
					var item = $('#' + settings.queueID).find('.uploadify-queue-item').get(0);
					$item = $(item);
					swfuploadify.cancelUpload($item.attr('id'));
					$item.find('.data').removeClass('data').html(' - Cancelled');
					$item.find('.uploadify-progress-bar').remove();
					$item.delay(1000).fadeOut(500, function() {
						$(this).remove();
					});
				}
			});

		},

		// Revert the DOM object back to its original state
		destroy : function() {

			this.each(function() {
				// Create a reference to the jQuery DOM object
				var $this        = $(this),
					swfuploadify = $this.data('uploadify'),
					settings     = swfuploadify.settings;

				// Destroy the SWF object and 
				swfuploadify.destroy();
				
				// Destroy the queue
				if (settings.defaultQueue) {
					$('#' + settings.queueID).remove();
				}
				
				// Reload the original DOM element
				$('#' + settings.id).replaceWith(swfuploadify.original);

				// Call the user-defined event handler
				if (settings.onDestroy) settings.onDestroy.call(this);

				delete swfuploadify;
			});

		},

		// Disable the select button
		disable : function(isDisabled) {
			
			this.each(function() {
				// Create a reference to the jQuery DOM object
				var $this        = $(this),
					swfuploadify = $this.data('uploadify'),
					settings     = swfuploadify.settings;

				// Call the user-defined event handlers
				if (isDisabled) {
					swfuploadify.button.addClass('disabled');
					if (settings.onDisable) settings.onDisable.call(this);
				} else {
					swfuploadify.button.removeClass('disabled');
					if (settings.onEnable) settings.onEnable.call(this);
				}

				// Enable/disable the browse button
				swfuploadify.setButtonDisabled(isDisabled);
			});

		},

		// Get or set the settings data
		settings : function(name, value, resetObjects) {

			var args        = arguments;
			var returnValue = value;

			this.each(function() {
				// Create a reference to the jQuery DOM object
				var $this        = $(this),
					swfuploadify = $this.data('uploadify'),
					settings     = swfuploadify.settings;
			

				if (typeof(args[0]) == 'object') {
					for (var n in value) {
						setData(n,value[n]);
					}
				}
				if (args.length === 1) {
					returnValue =  settings[name];
				} else {
					switch (name) {
						case 'uploader':
							swfuploadify.setUploadURL(value);
							break;
						case 'formData':
							if (!resetObjects) {
								value = $.extend(settings.formData, value);
							}
							swfuploadify.setPostParams(settings.formData);
							break;
						case 'method':
							if (value == 'get') {
								swfuploadify.setUseQueryString(true);
							} else {
								swfuploadify.setUseQueryString(false);
							}
							break;
						case 'fileObjName':
							swfuploadify.setFilePostName(value);
							break;
						case 'fileTypeExts':
							swfuploadify.setFileTypes(value, settings.fileTypeDesc);
							break;
						case 'fileTypeDesc':
							swfuploadify.setFileTypes(settings.fileTypeExts, value);
							break;
						case 'fileSizeLimit':
							swfuploadify.setFileSizeLimit(value);
							break;
						case 'uploadLimit':
							swfuploadify.setFileUploadLimit(value);
							break;
						case 'queueSizeLimit':
							swfuploadify.setFileQueueLimit(value);
							break;
						case 'buttonImage':
							swfuploadify.button.css('background-image', settingValue);
							break;
						case 'buttonCursor':
							if (value == 'arrow') {
								swfuploadify.setButtonCursor(SWFUpload.CURSOR.ARROW);
							} else {
								swfuploadify.setButtonCursor(SWFUpload.CURSOR.HAND);
							}
							break;
						case 'buttonText':
							$('#' + settings.id + '-button').find('.uploadify-button-text').html(value);
							break;
						case 'width':
							swfuploadify.setButtonDimensions(value, settings.height);
							break;
						case 'height':
							swfuploadify.setButtonDimensions(settings.width, value);
							break;
						case 'multi':
							if (value) {
								swfuploadify.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILES);
							} else {
								swfuploadify.setButtonAction(SWFUpload.BUTTON_ACTION.SELECT_FILE);
							}
							break;
					}
					settings[name] = value;

				}
			});
			if (args.length === 1) {
				return returnValue;
			}

		},

		// Stop the current uploads and requeue what is in progress
		stop : function() {

			this.each(function() {
				// Create a reference to the jQuery DOM object
				var $this        = $(this),
					swfuploadify = $this.data('uploadify');

				// Reset the queue information
				swfuploadify.queueData.averageSpeed  = 0;
				swfuploadify.queueData.uploadSize    = 0;
				swfuploadify.queueData.bytesUploaded = 0;
				swfuploadify.queueData.uploadQueue   = [];

				swfuploadify.stopUpload();
			});

		},

		// Start uploading files in the queue
		upload : function() {

			var args = arguments;

			this.each(function() {
				// Create a reference to the jQuery DOM object
				var $this        = $(this),
					swfuploadify = $this.data('uploadify');

				// Reset the queue information
				swfuploadify.queueData.averageSpeed  = 0;
				swfuploadify.queueData.uploadSize    = 0;
				swfuploadify.queueData.bytesUploaded = 0;
				swfuploadify.queueData.uploadQueue   = [];
				
				// Upload the files
				if (args[0]) {
					if (args[0] == '*') {
						swfuploadify.queueData.uploadSize = swfuploadify.queueData.queueSize;
						swfuploadify.queueData.uploadQueue.push('*');
						swfuploadify.startUpload();
					} else {
						for (var n = 0; n < args.length; n++) {
							swfuploadify.queueData.uploadSize += swfuploadify.queueData.files[args[n]].size;
							swfuploadify.queueData.uploadQueue.push(args[n]);
						}
						swfuploadify.startUpload(swfuploadify.queueData.uploadQueue.shift());
					}
				} else {
					swfuploadify.startUpload();
				}

			});

		}

	}

	// These functions handle all the events that occur with the file uploader
	var handlers = {

		// Triggered when the file dialog is opened
		onDialogOpen : function() {
			// Load the swfupload settings
			var settings = this.settings;

			// Reset some queue info
			this.queueData.errorMsg       = 'Some files were not added to the queue:';
			this.queueData.filesReplaced  = 0;
			this.queueData.filesCancelled = 0;

			// Call the user-defined event handler
			if (settings.onDialogOpen) settings.onDialogOpen.call(this);
		},

		// Triggered when the browse dialog is closed
		onDialogClose :  function(filesSelected, filesQueued, queueLength) {
			// Load the swfupload settings
			var settings = this.settings;

			// Update the queue information
			this.queueData.filesErrored  = filesSelected - filesQueued;
			this.queueData.filesSelected = filesSelected;
			this.queueData.filesQueued   = filesQueued - this.queueData.filesCancelled;
			this.queueData.queueLength   = queueLength;

			// Run the default event handler
			if ($.inArray('onDialogClose', settings.overrideEvents) < 0) {
				if (this.queueData.filesErrored > 0) {
					console.log(this.queueData.errorMsg);
				}
			}

			// Call the user-defined event handler
			if (settings.onDialogClose) settings.onDialogClose.call(this, this.queueData);

			// Upload the files if auto is true
			if (settings.auto) $('#' + settings.id).uploadify('upload', '*');
		},

		// Triggered once for each file added to the queue
		onSelect : function(file) {
			// Load the swfupload settings
			var settings = this.settings;
		
			// Check if a file with the same name exists in the queue
			var queuedFile = {};
			for (var n in this.queueData.files) {
				queuedFile = this.queueData.files[n];
				if (queuedFile.uploaded != true && queuedFile.name == file.name) {
					var replaceQueueItem = confirm('The file named "' + file.name + '" is already in the queue.\nDo you want to replace the existing item in the queue?');
					if (!replaceQueueItem) {
						this.cancelUpload(file.id);
						this.queueData.filesCancelled++;
						return false;
					} else {
						$('#' + queuedFile.id).remove();
						this.cancelUpload(queuedFile.id);
						this.queueData.filesReplaced++;
					}
				}
			}

			// Get the size of the file
			var fileSize = Math.round(file.size / 1024);
			var suffix   = 'KB';
			if (fileSize > 1000) {
				fileSize = Math.round(fileSize / 1000);
				suffix   = 'MB';
			}
			var fileSizeParts = fileSize.toString().split('.');
			fileSize = fileSizeParts[0];
			if (fileSizeParts.length > 1) {
				fileSize += '.' + fileSizeParts[1].substr(0,2);
			}
			fileSize += suffix;
			
			// Truncate the filename if it's too long
			var fileName = file.name;
			if (fileName.length > 25) {
				fileName = fileName.substr(0,25) + '...';
			}

			// Create the file data object
			itemData = {
				'fileID'     : file.id,
				'instanceID' : settings.id,
				'fileName'   : fileName,
				'fileSize'   : fileSize
			}

			// Create the file item template
			if (settings.itemTemplate == false) {
				settings.itemTemplate = '<div id="${fileID}" class="uploadify-queue-item col-lg-3  col-sm-3 col-md-3 col-xs-12">\
					<div class="cancel">\
						<a href="javascript:$(\'#${instanceID}\').uploadify(\'cancel\', \'${fileID}\')">X</a>\
					</div>\
					<span class="fileName">${fileName} (${fileSize})</span><span class="data"></span>\
					<div class="uploadify-progress">\
						<div class="uploadify-progress-bar"><!--Progress Bar--></div>\
					</div>\
				</div>';
			}

			// Run the default event handler
			if ($.inArray('onSelect', settings.overrideEvents) < 0) {
				
				// Replace the item data in the template
				itemHTML = settings.itemTemplate;
				for (var d in itemData) {
					itemHTML = itemHTML.replace(new RegExp('\\$\\{' + d + '\\}', 'g'), itemData[d]);					
				}

				// Add the file item to the queue
				$('#' + settings.queueID).append(itemHTML);
			}

			this.queueData.queueSize += file.size;
			this.queueData.files[file.id] = file;
			// Call the user-defined event handler
			if (settings.onSelect) settings.onSelect.apply(this, arguments);
		},

		// Triggered when a file is not added to the queue
		onSelectError : function(file, errorCode, errorMsg) {
			// Load the swfupload settings
			var settings = this.settings;

			// Run the default event handler
			if ($.inArray('onSelectError', settings.overrideEvents) < 0) {
				switch(errorCode) {
					case SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED:
						if (settings.queueSizeLimit > errorMsg) {
							this.queueData.errorMsg += '\nThe number of files selected exceeds the remaining upload limit (' + errorMsg + ').';
						} else {
							this.queueData.errorMsg += '\nThe number of files selected exceeds the queue size limit (' + settings.queueSizeLimit + ').';
						}
						break;
					case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
						this.queueData.errorMsg += '\nThe file "' + file.name + '" exceeds the size limit (' + settings.fileSizeLimit + ').';
						break;
					case SWFUpload.QUEUE_ERROR.ZERO_BYTE_FILE:
						this.queueData.errorMsg += '\nThe file "' + file.name + '" is empty.';
						break;
					case SWFUpload.QUEUE_ERROR.FILE_EXCEEDS_SIZE_LIMIT:
						this.queueData.errorMsg += '\nThe file "' + file.name + '" is not an accepted file type (' + settings.fileTypeDesc + ').';
						break;
				}
			}
			if (errorCode != SWFUpload.QUEUE_ERROR.QUEUE_LIMIT_EXCEEDED) {
				delete this.queueData.files[file.id];
			}

			// Call the user-defined event handler
			if (settings.onSelectError) settings.onSelectError.apply(this, arguments);
		},

		// Triggered when all the files in the queue have been processed
		onQueueComplete : function() {
			if (this.settings.onQueueComplete) this.settings.onQueueComplete.call(this, this.settings.queueData);
		},

		// Triggered when a file upload successfully completes
		onUploadComplete : function(file) {
			// Load the swfupload settings
			var settings     = this.settings,
				swfuploadify = this;

			// Check if all the files have completed uploading
			var stats = this.getStats();
			this.queueData.queueLength = stats.files_queued;
			if (this.queueData.uploadQueue[0] == '*') {
				if (this.queueData.queueLength > 0) {
					this.startUpload();
				} else {
					this.queueData.uploadQueue = [];

					// Call the user-defined event handler for queue complete
					if (settings.onQueueComplete) settings.onQueueComplete.call(this, this.queueData);
				}
			} else {
				if (this.queueData.uploadQueue.length > 0) {
					this.startUpload(this.queueData.uploadQueue.shift());
				} else {
					this.queueData.uploadQueue = [];

					// Call the user-defined event handler for queue complete
					if (settings.onQueueComplete) settings.onQueueComplete.call(this, this.queueData);
				}
			}

			// Call the default event handler
			if ($.inArray('onUploadComplete', settings.overrideEvents) < 0) {
				if (settings.removeCompleted) {
					switch (file.filestatus) {
						case SWFUpload.FILE_STATUS.COMPLETE:
							setTimeout(function() { 
								if ($('#' + file.id)) {
									swfuploadify.queueData.queueSize   -= file.size;
									swfuploadify.queueData.queueLength -= 1;
									delete swfuploadify.queueData.files[file.id]
									$('#' + file.id).fadeOut(500, function() {
										$(this).remove();
									});
								}
							}, settings.removeTimeout * 1000);
							break;
						case SWFUpload.FILE_STATUS.ERROR:
							if (!settings.requeueErrors) {
								setTimeout(function() {
									if ($('#' + file.id)) {
										swfuploadify.queueData.queueSize   -= file.size;
										swfuploadify.queueData.queueLength -= 1;
										delete swfuploadify.queueData.files[file.id];
										$('#' + file.id).fadeOut(500, function() {
											$(this).remove();
										});
									}
								}, settings.removeTimeout * 1000);
							}
							break;
					}
				} else {
					file.uploaded = true;
				}
			}

			// Call the user-defined event handler
			if (settings.onUploadComplete) settings.onUploadComplete.call(this, file);
		},

		// Triggered when a file upload returns an error
		 onUploadError: function(file, errorCode, errorMsg) {
			// Load the swfupload settings
			var settings = this.settings;

			// Set the error string
			var errorString = 'Error';
			switch(errorCode) {
				case SWFUpload.UPLOAD_ERROR.HTTP_ERROR:
					errorString = 'HTTP Error (' + errorMsg + ')';
					break;
				case SWFUpload.UPLOAD_ERROR.MISSING_UPLOAD_URL:
					errorString = 'Missing Upload URL';
					break;
				case SWFUpload.UPLOAD_ERROR.IO_ERROR:
					errorString = 'IO Error';
					break;
				case SWFUpload.UPLOAD_ERROR.SECURITY_ERROR:
					errorString = 'Security Error';
					break;
				case SWFUpload.UPLOAD_ERROR.UPLOAD_LIMIT_EXCEEDED:
					console.log('The upload limit has been reached (' + errorMsg + ').');
					errorString = 'Exceeds Upload Limit';
					break;
				case SWFUpload.UPLOAD_ERROR.UPLOAD_FAILED:
					errorString = 'Failed';
					break;
				case SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND:
					break;
				case SWFUpload.UPLOAD_ERROR.FILE_VALIDATION_FAILED:
					errorString = 'Validation Error';
					break;
				case SWFUpload.UPLOAD_ERROR.FILE_CANCELLED:
					errorString = 'Cancelled';
					this.queueData.queueSize   -= file.size;
					this.queueData.queueLength -= 1;
					if (file.status == SWFUpload.FILE_STATUS.IN_PROGRESS || $.inArray(file.id, this.queueData.uploadQueue) >= 0) {
						this.queueData.uploadSize -= file.size;
					}
					// Trigger the onCancel event
					if (settings.onCancel) settings.onCancel.call(this, file);
					delete this.queueData.files[file.id];
					break;
				case SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED:
					errorString = 'Stopped';
					break;
			}

			// Call the default event handler
			if ($.inArray('onUploadError', settings.overrideEvents) < 0) {

				if (errorCode != SWFUpload.UPLOAD_ERROR.FILE_CANCELLED && errorCode != SWFUpload.UPLOAD_ERROR.UPLOAD_STOPPED) {
					$('#' + file.id).addClass('uploadify-error');
				}

				// Reset the progress bar
				$('#' + file.id).find('.uploadify-progress-bar').css('width','1px');

				// Add the error message to the queue item
				if (errorCode != SWFUpload.UPLOAD_ERROR.SPECIFIED_FILE_ID_NOT_FOUND && file.status != SWFUpload.FILE_STATUS.COMPLETE) {
					$('#' + file.id).find('.data').html(' - ' + errorString);
				}
			}

			var stats = this.getStats();
			this.queueData.uploadsErrored = stats.upload_errors;

			// Call the user-defined event handler
			if (settings.onUploadError) settings.onUploadError.call(this, file, errorCode, errorMsg, errorString);
		},

		// Triggered periodically during a file upload
		onUploadProgress : function(file, fileBytesLoaded, fileTotalBytes) {
			// Load the swfupload settings
			var settings = this.settings;

			// Setup all the variables
			var timer            = new Date();
			var newTime          = timer.getTime();
			var lapsedTime       = newTime - this.timer;
			if (lapsedTime > 500) {
				this.timer = newTime;
			}
			var lapsedBytes      = fileBytesLoaded - this.bytesLoaded;
			this.bytesLoaded     = fileBytesLoaded;
			var queueBytesLoaded = this.queueData.queueBytesUploaded + fileBytesLoaded;
			var percentage       = Math.round(fileBytesLoaded / fileTotalBytes * 100);
			
			// Calculate the average speed
			var suffix = 'KB/s';
			var mbs = 0;
			var kbs = (lapsedBytes / 1024) / (lapsedTime / 1000);
			    kbs = Math.floor(kbs * 10) / 10;
			if (this.queueData.averageSpeed > 0) {
				this.queueData.averageSpeed = Math.floor((this.queueData.averageSpeed + kbs) / 2);
			} else {
				this.queueData.averageSpeed = Math.floor(kbs);
			}
			if (kbs > 1000) {
				mbs = (kbs * .001);
				this.queueData.averageSpeed = Math.floor(mbs);
				suffix = 'MB/s';
			}
			
			// Call the default event handler
			if ($.inArray('onUploadProgress', settings.overrideEvents) < 0) {
				if (settings.progressData == 'percentage') {
					$('#' + file.id).find('.data').html(' - ' + percentage + '%');
				} else if (settings.progressData == 'speed' && lapsedTime > 500) {
					$('#' + file.id).find('.data').html(' - ' + this.queueData.averageSpeed + suffix);
				}
				$('#' + file.id).find('.uploadify-progress-bar').css('width', percentage + '%');
			}

			// Call the user-defined event handler
			if (settings.onUploadProgress) settings.onUploadProgress.call(this, file, fileBytesLoaded, fileTotalBytes, queueBytesLoaded, this.queueData.uploadSize);
		},

		// Triggered right before a file is uploaded
		onUploadStart : function(file) {
			// Load the swfupload settings
			var settings = this.settings;

			var timer        = new Date();
			this.timer       = timer.getTime();
			this.bytesLoaded = 0;
			if (this.queueData.uploadQueue.length == 0) {
				this.queueData.uploadSize = file.size;
			}
			if (settings.checkExisting) {
				$.ajax({
					type    : 'POST',
					async   : false,
					url     : settings.checkExisting,
					data    : {filename: file.name},
					success : function(data) {
						if (data == 1) {
							var overwrite = confirm('A file with the name "' + file.name + '" already exists on the server.\nWould you like to replace the existing file?');
							if (!overwrite) {
								this.cancelUpload(file.id);
								$('#' + file.id).remove();
								if (this.queueData.uploadQueue.length > 0 && this.queueData.queueLength > 0) {
									if (this.queueData.uploadQueue[0] == '*') {
										this.startUpload();
									} else {
										this.startUpload(this.queueData.uploadQueue.shift());
									}
								}
							}
						}
					}
				});
			}

			// Call the user-defined event handler
			if (settings.onUploadStart) settings.onUploadStart.call(this, file); 
		},

		// Triggered when a file upload returns a successful code
		onUploadSuccess : function(file, data, response) {
			// Load the swfupload settings
			var settings = this.settings;
			var stats    = this.getStats();
			this.queueData.uploadsSuccessful = stats.successful_uploads;
			this.queueData.queueBytesUploaded += file.size;

			// Call the default event handler
			if ($.inArray('onUploadSuccess', settings.overrideEvents) < 0) {
				$('#' + file.id).find('.data').html(' - Complete');
			}

			// Call the user-defined event handler
			if (settings.onUploadSuccess) settings.onUploadSuccess.call(this, file, data, response); 
		}

	}

	$.fn.uploadify = function(method) {

		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('The method ' + method + ' does not exist in $.uploadify');
		}

	}

})($);