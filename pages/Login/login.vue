<template>
	<view>
		<u-popup :show="showservice" mode="bottom" :closeable="true" @close="closeservice" @open="openservice">
		        <view style="height:900rpx;overflow-y:scroll;padding-left:50rpx;padding-right:65rpx;line-height:50rpx;">
		            <view style="text-align:center;padding-top: 50rpx;"><text style="font-size:18px;font-weight:600;">用户服务协议</text></view>
					<text style="white-space:normal;padding-bottom:50rpx;font-size:15px;">
					\n重要提示：
					“防疫宝”是由南京市信息中心主办，南京大数据集团有限公司（以下简称“南京大数据”或“我们”）运营管理的城市级公众服务平台。《用户服务协议》（以下简称“服务协议”或“本协议”）由用户（以下或称“您”）与南京大数据依据本协议约定的方式订立，用于明确在您使用我们提供的产品或服务时，双方之间的权利义务关系。本协议一经订立，将在您与我们之间具有合同上的法律效力。
					我们郑重提示您，请您审慎阅读并充分理解本协议全部条款，特别是其中所涉及的免除或限制我们义务与责任的条款、排除或限制用户权利的条款等，以及以粗体字样标识的内容。当您点击“同意”本协议，注册成为我们的用户，即视为您理解并同意本协议的相关约定，同意本协议对您和我们具有法律约束力。如您不同意本协议，请立即停止注册或使用我们的服务。

					一、服务协议的确认和接纳
					“防疫宝”是集成南京居民各类生活信息的城市级公共服务平台。防疫宝公共服务平台（以下简称“防疫宝服务平台”）以“智慧城市”建设为基础，以“信息惠民”为宗旨，以广大居民足不出户、随时随地享受优质服务和生活便利为目标，致力于汇聚全市政务服务、公共服务和便民服务资源，提供政务，医疗、交通、旅游、便民服务等功能。
					本协议适用于南京大数据运营管理的防疫宝服务平台，具体服务载体包括APP、公众号、小程序等。为了保障您的权益，您在注册成为我们的用户前，务必审慎阅读并同意接受服务协议的所有内容。
					我们有权根据法律法规、国家标准及业务运营之需要适时修改本协议。如果本协议发生变更的，我们将在防疫宝服务平台的相关页面中发布公告。该公告一经发布即生效，并构成本协议的组成部分。该等变更服务协议内容的行为不视为我们违反本协议之约定。如您在本协议修改后继续使用我们提供的产品或服务的，即表示您已充分阅读、理解并同意修改后的协议，愿意受修改后协议的约束；如您不同意修改后的协议，请立即停止使用我们的服务。
					除本协议以外，我们已经发布的或将来可能发布的有关向您提供产品或服务的协议、服务规则、政策、须知等内容，均视为本协议的补充协议，作为本协议的组成部分，与本协议具有同等法律效力。请您及时关注并阅读前述相关补充协议。相关补充协议的部分或全部条款被认定无效的，不影响其它协议或协议条款的效力。

					二、账户注册和用户管理
					在使用我们的服务前，您需要完成账户注册。您应当按照注册页面的提示，提供真实、完整、准确的信息。
					如您为18周岁以上的自然人，您应具有民事权利能力，并能够独立承担民事责任；如您为未满18周岁的未成年人或存在其他具有限制民事行为能力的情形，请您在取得父母或监护人的同意下注册或使用平台，否则我们有权随时暂停或终止您的用户资格。
					您不得使用他人的信息注册账户或向我们提供其他的虚假信息。在注册后，如发现您以虚假信息骗取注册，我们有权不经通知单方采取限期改正、删除资料、暂停使用、注销账户并终止对您提供部分或全部服务等措施。我们对因此造成的服务暂停、终止不承担任何责任，您应当承担一切不利后果。如因此给我们造成损失的，您应当承担相应责任。
					您应及时更正不实信息，更新、完善相关信息。如您未及时更正、更新信息导致我们无法按本协议约定向您提供服务，或导致您在使用我们产品或服务过程中产生任何损失或费用的，由此产生的后果由您自行承担。
					防疫宝服务平台账号的所有权归南京大数据所有，用户完成申请注册后，仅获得防疫宝服务平台账号的有限使用权，账号仅可为个人出于非商业目的进行使用,不得以转让、出租、出借、售卖、分享或其他任何方式交由他人使用（但法律另有规定或双方另有明确约定的除外）。
					若您使用第三方账户授权登陆防疫宝服务平台，则视为您接受本协议，并同意我们向该第三方收集您的信息（仅限于您注册、登录防疫宝服务平台所需的必要信息）。
					为了维护良好的网络环境，我们有时需要了解您使用我们服务的真实背景及目的，如我们要求您提供相关信息或资料的，请您配合提供。

					三、数据保护
					我们非常重视对用户信息的保护。《防疫宝隐私政策》呈现了我们将如何处理及保护您的个人信息，详情请参阅《防疫宝隐私政策》。

					四、使用规则
					您理解并同意，您不得利用我们的产品或服务制作、复制、发布、传播如下干扰我们运营，或侵犯其他用户或第三方合法权益的内容：
					1)反对中华人民共和国宪法所确定的基本原则的；
					2)危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
					3)损害国家荣誉和利益的；
					4)煽动民族仇恨、民族歧视，破坏民族团结的；
					5)破坏国家宗教政策，宣扬邪教和封建迷信的；
					6)散布谣言，扰乱社会秩序，破坏社会稳定的；
					7)散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；
					8)侮辱或者诽谤他人，侵害他人合法权益的；
					9)侵犯他人的肖像权、隐私权、商业秘密或其他任何合法权益的；
					10)含有法律、行政法规禁止的其他内容的。
					您在使用我们的产品或服务时，必须遵守中华人民共和国相关法律及本协议的规定，不得利用我们的产品或服务从事任何违法或可能违反本协议的活动。如您违反相关法律或本协议规定，使用我们的产品或服务造成对第三方合法权益的损害，对第三方的损失，您应当承担全部的责任，我们不为此承担任何责任。
					我们有权基于单方独立判断，在认为可能发生危害国家安全、公共安全、社会公共利益、南京大数据或其他个人、组织合法权益等情形时，不经通知而先行限制或关闭用户的账户，暂停或终止向用户提供本协议项下的全部或部分产品或服务，并将用户的相关数据删除，且无需对用户承担任何责任。前述情形包括但不限于：
					1)我们认为用户提供的信息不具有真实性、完整性或准确性，包括但不限于盗用他人证件信息注册等；
					2)我们发现用户未经我们同意，转让、出售或出借予他人使用防疫宝服务平台账户；
					3)我们发现用户利用我们的产品或服务从事违反法律的活动；
					4)我们认为用户已经违反本协议及相关协议和规则中规定的条款；
					5)法律规定或有权机关的要求。
					用户违反本协议或相关的服务条款的规定，导致或产生的我们或第三方主张的任何索赔、要求或损失，包括合理的律师费，您同意予以赔偿。同时，我们有权视用户的行为性质，采取包括但不限于暂停使用、限制使用、终止服务、注销账户、追究法律责任等措施。

					五、账户与服务安全
					您应当妥善保管自己的账号、密码及其他有效识别信息。因您个人原因导致的账号、密码或其他有效识别信息泄露、丢失或账号和密码被窃取、篡改等导致的一切损失，由您自行承担。
					如您发现账号、密码被他人冒用或盗用，请立即以有效方式通知我们，要求我们暂停服务。我们在采取行动的合理期限内，不对您的损失承担任何责任。
					除本协议另有约定，您不应将账号、密码以及账户转让、出售或出借予他人使用。通过您的账户编辑、发布的任何信息或作出的任何行为都将视为您本人的行为。若您授权他人使用账户，应对被授权人在该账户下发生所有行为负全部责任。
					为保护账号安全，防止账号被盗等情况发生，我们可能会不时或定期采用一种或多种方式对注册用户进行用户身份验证（如短信验证），如用户未成功通过验证，我们有合理理由怀疑该账号出现被盗等不安全情况，并可能视情节严重情况而单方决定是否中止或终止向该账号继续提供我们的产品、服务或采取进一步措施。您同意，我们采取前述措施是为了保护用户账号安全，我们无需因此承担任何责任。

					六、账户注销
					如用户账户存在以下情形，我们有权要求您限期改正、删除相关信息、暂停使用、直至注销您的账户：
					1)用户提交的注册信息不真实、准确、完整，经过我们通知后仍不改正的；
					2)用户未经我们同意，转让、出售或出借予他人使用防疫宝服务平台账户；
					3)用户利用我们的产品或服务从事违反法律的活动；
					4)用户违反本协议及相关协议和规则中规定的条款；
					5)用户注册账户后，超过【12】个月不使用账户，同时账户内没有余额且无任何未到期服务或权益;
					6)法律规定或有权机关的要求。
					用户已充分知晓并确认，账户注销后，用户将不再拥有账户相关的权益，包括但不限于：账户注销后，用户将无法再继续通过防疫宝服务平台账户使用相关产品或服务，无法再享受防疫宝服务平台账户中的相关权益，且不可恢复，账户信息、交易记录、历史订单等数据将被删除或匿名化，且无法恢复。
					因注销账户所带来的不便或不利后果，由用户自行承担。

					七、风险自担
					您知悉并同意，除本协议另有约定或法律法规另有规定外，我们的产品或服务乃按“现状”提供，我们不对提供的产品或服务（含技术和信息）作出任何明示或暗示的承诺或保证，包括但不限于质量、稳定、正确、及时、完整、连贯、安全，但我们将按现有技术水平，尽力促使我们服务的正确、持续、及时和安全。您同意承担使用我们服务的所有风险及因该风险可能造成的任何损害，我们对于您所使用的各项服务或无法使用各项服务所导致的损害，包括但不限于商业利润的损失、贸易的中断、信息或数据的丢失，都不负任何赔偿责任，即使我们已被告知存在这种损害的可能性也不例外。若因服务器、通信网络和移动智能终端的软硬件故障、电信部门技术调整、计算机病毒、恶意攻击及其他不可预测的因素而受到影响，造成您无法正常使用我们的服务，我们不承担任何责任。尽管有前述约定，我们将采取合理行动促使服务恢复正常。
					在适用法律允许的范围内，我们有权随时自行决定暂停、终止、修改服务，或对部分用户暂停、终止、修改服务，且毋须另行通知。
					防疫宝服务平台中可能会包含至第三方产品或服务的链接，我们提供该等链接的目的仅在于向您提供方便，我们对此不作任何保证，亦不代表我们对该等第三方、其产品及服务的任何推荐、支持或授权，您应当自行甄别并自担风险。您在使用上述第三方的任何产品和服务时，应当了解并接受该等第三方的条款和规则。
					防疫宝服务平台只适用于安装指定操作系统的移动智能终端，对于安装非指定操作系统的用户，我们不做任何服务质量保证，由此造成的损失，我们不承担责任。
					因用户自身的原因导致的任何损失或责任，由用户自行负责，我们不承担责任。我们不承担责任的情形包括但不限于：
					1)用户未按照本协议或我们不时公布的任何规则进行操作导致的任何损失或责任；
					2)用户未向我们提供正确的联络方式，未能及时收到我们相关通知导致的任何损失或责任；
					3)其他因用户原因导致的任何损失或责任。

					八、知识产权的保护
					我们的网站、移动智能终端应用及向您提供服务过程中使用的所有内容，包括但不限于任何文字、图像、视频、图表、软件及其他材料均为我们或其他特别注明的权利人所有。我们及相应权利人并未通过本协议授予您对上述信息和内容的任何其他权利。除非经相应权利人事先书面同意，您不得以任何形式向任何第三方公开发表、传输、复制或以其他方式使用我们提供的全部或部分信息，不得更改、虚化或删除任何署名、商标、版权标识和/或其他权利声明。
					尊重知识产权是您应尽的义务，如您有违反，造成我们或相应权利人损失的，您需要承担损害赔偿责任。

					九、其他
					如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效且具有约束力，您和我们均应尽力使该条款设定的本意得到实现。
					本协议之效力、解释、变更、执行与争议解决均适用中华人民共和国法律。
					本协议签订地为中国南京市江宁区。因本协议所引起的用户与我们的任何纠纷或争议，双方应尽量友好协商解决；协商不成的，任何一方均可向我们所在地即南京市有管辖权的人民法院提起诉讼。
					
					【审慎提醒】如您选择点击“同意”本协议，并完成注册，本协议将立即生效，并构成您与我们之间有约束力的法律文件。
					</text>
		        </view>
		</u-popup>
		<u-popup :show="showprivacy" mode="bottom" :closeable="true" @close="closeprivacy" @open="openprivacy">
		        <view style="height:900rpx;overflow-y:scroll;padding-left:50rpx;padding-right:65rpx;line-height:50rpx;">
		            <view style="text-align:center;padding-top: 50rpx;"><text style="font-size:18px;font-weight:600;">防疫宝隐私政策</text></view>
		        	<text style="white-space:normal;padding-bottom: 50rpx;font-size: 15px;">
					\n“防疫宝”是由南京市信息中心主办，南京大数据集团有限公司（以下简称“南京大数据”或“我们”）运营管理的城市级公众服务平台（以下简称“防疫宝服务平台”）。我们非常重视保护用户（以下简称“您”）的个人信息和隐私。您在注册、登录和使用防疫宝服务平台（包括但不限于APP、公众号、小程序以及随技术发展出现的新形态）向您提供的产品和服务时，我们会处理您的相关个人信息。为呈现我们处理您个人信息的情况，我们特制定《防疫宝隐私政策》（以下简称“隐私政策”或“本政策”），我们承诺严格按照本政策处理您的个人信息。
					
					我们在此提醒您：
					在您使用防疫宝服务平台前，请您务必认真阅读本隐私政策，充分理解各条款内容，包括但不限于免除或限制我们责任的条款。您应当在充分阅读、明确理解本政策并同意本政策全部条款的有效性的前提下使用我们的服务，您不会以我们未尽到合理提示义务为由而声称本政策中的条款非法或无效。您知晓并确认，当您勾选“同意”本政策且使用防疫宝服务平台，就表示您同意我们按照本政策处理您的个人信息。请您知悉，本政策仅适用于我们通过防疫宝服务平台向您提供产品或服务（统称“服务”）所收集的信息，如防疫宝服务平台中的某项服务有单独的个人信息处理规则，则该单独规则优先适用，该规则未涵盖的内容，以本政策的内容为准。但是，本政策不适用于通过我们的平台或服务接入的第三方收集的信息，您使用该等第三方的服务须受其隐私政策（而非本政策）约束，您应仔细阅读其政策内容。我们不参与且不对您与第三方之间因个人信息保护等发生的纠纷承担任何责任。
					如您对本政策内容有任何疑问、意见或建议，您可通过本政策提供的各种联系方式与我们联系。
					
					本政策将帮助您了解以下内容：
					一、我们如何收集和使用您的个人信息
					二、我们如何保存您的个人信息
					
					一、我们如何收集和使用您的个人信息
					1、我们如何收集您的个人信息
					在您使用防疫宝服务平台过程中，我们会按照如下方式收集您的个人信息，以向您提供我们的服务、优化我们的服务质量以及保障服务的安全与稳定运行：
					1.1完成注册登录和实名认证
					当您注册、登录防疫宝平台账户时，根据您选择的注册、登录方式，我们需要收集您的以下账户注册信息和实名认证信息：
					1)当您选择手机实名认证、注册时，我们将收集您的姓名、手机号码、身份证号码、密码、短信验证码信息，并通过第三方实名验证机构（包括国家机关、电信运营商、清算机构、商业银行、支付机构、科技公司等，下同）查询、收集您的实名认证结果；
					2)当您选择公安部实名认证、注册时，我们将收集您的姓名、手机号码、身份证号码、面部识别特征、密码、短信验证码信息，并通过第三方实名验证机构查询、收集您的实名认证结果；
					3)当您选择常住人口人脸识别认证、注册时，我们将收集您的姓名、手机号码、身份证号码、面部识别特征、密码、短信验证码信息，并通过第三方实名验证机构查询、收集您的实名认证结果；
					4)当您选择手持身份证照片认证、注册时，我们将收集您的姓名、手机号码、身份证号码、手持身份证照片、密码、短信验证码信息；
					5)当您选择支付宝人脸识别认证、注册时，我们将收集您的姓名、手机号码、身份证号码、面部识别特征、密码、短信验证码信息，并通过第三方实名验证机构查询、收集您的实名认证结果；
					6)当您选择银联卡实名认证、注册时，我们将收集您的姓名、银行预留手机号码、身份证号码、银行卡号、密码、短信验证码信息，并通过第三方实名验证机构查询、收集您的实名认证结果；
					7)当您选择支付宝账号认证、注册时，我们将收集您的姓名、手机号码、身份证号码、密码、短信验证码信息，并通过第三方实名验证机构查询、收集您的实名认证结果；
					8)当您选择港澳台/外籍人士认证、注册时，我们将收集您的姓名、银行预留手机号码、港澳台居民居住证/港澳台居民来往内地通行证/台湾居民来往大陆通行证/护照号码、银行卡号码、密码、短信验证码信息，并通过第三方实名验证机构查询、收集您的实名认证结果；
					9)当您选择邀请码认证、注册时，我们将收集您的姓名、手机号码、身份证号码、邀请码、密码、短信验证码信息；
					10)当您选择使用“江苏政务服务”APP关联登录防疫宝服务平台账户时，我们将收集您的面部识别特征，并通过江苏省政务服务管理办公室查询您的姓名、登录名称、证件类型、证件号码、手机号码、邮箱地址、实名认证结果、实名等级、唯一识别码。
					11)为便于您查看您的账号登录历史，我们会在您登录账号时收集您的登录信息（包括登录时间）、设备信息（包括设备型号、操作系统类型、操作系统版本、APP版本号），以便您可以便捷地在防疫宝服务平台浏览、查阅您的账号登录历史。
					我们收集您的上述信息是为了帮助您完成防疫宝服务平台账户的注册、登录，对您进行实名认证以及保护您的账户安全。如不收集这类信息，我们将无法为您提供账号注册登录以及提供需注册账户和实名认证后方可使用的服务。
					当您使用第三方账户（如支付宝、微信或QQ）关联登录防疫宝服务平台时，我们将通过该等第三方收集您的头像、昵称、性别、地区、姓名、身份证号码。如您不提供这类信息，您将无法通过第三方账户注册、使用防疫宝服务平台。
					请您知悉，为便于您使用南京市政务服务、公共服务和便民服务资源，当您注册防疫宝服务平台账户后，您可以直接使用“防疫宝”服务平台账户登录、使用“智慧溧水”APP和“我的江宁”APP，我们会自动同步为您开通、绑定“智慧溧水”APP账户和“我的江宁”APP账户；如您已事先注册前述APP的账户，为便于您可以使用“智慧溧水”APP和“我的江宁”APP账户直接登录、使用防疫宝服务平台账户，我们将分别向“智慧溧水”APP（运营者：南京市溧水区智慧城市运营指挥中心）和“我的江宁”APP（运营者：南京市江宁区信息化管理服务中心）间接收集您的姓名、用户ID、手机号码、登陆密码、身份证号码、注册方式、来源渠道、设备ID、头像、地址和终端类型，以便为您同步开通、绑定防疫宝服务平台账户。
					1.2信息展示和搜索
					为了让您快速地找到您想使用的产品或服务，我们将收集您的用户ID、设备信息（包括设备型号、设备ID、操作系统类型和版本和应用程序版本）、浏览器类型和搜索内容。我们收集上述信息是为了以匹配您设备界面的形式向您展示产品或服务信息，以及便于您查询历史搜索记录。
					为向您提供更契合您需求的信息展示、搜索及推送服务，我们需要收集您的手机号码、年龄、性别、地区、精准地理位置信息、APP点击和使用记录，并通过南京市大数据管理局运营的用户体验分析SDK收集您的设备信息（设备品牌、设备型号、无线网SSID名称、WIFI路由器MAC地址、OAID、设备IMSI、设备ANDROID_ID、设备MEID、设备ICCID、设备硬件序列号、设备MAC地址、设备IMEI、手机系统重启时间、磁盘总空间、系统总内存空间、CPU数目、IDFA、IDFV、设备时区、软件系统版本相关信息、系统语言、屏幕宽度、屏幕高度、IP地址）、应用信息（APP名称、APP包名称、APP版本号、APP进程信息）、用户ID、运营商信息、网络类型进行数据分析，形成特征标签进行间接人群画像，以通过防疫宝服务平台或手机短信向您展示、推送信息。如果您不想希望受到个性化内容的影响或收到消息提示，您可以在防疫宝服务平台“设置-消息管理”中关闭消息提醒或短信回复“TD”。
					1.3信息发布
					当您使用评论等信息发布功能时，我们将收集您的用户ID、发布内容、发布时间。我们收集上述信息是为了向您提供信息发布功能，以便展示、发布您的评论等信息。
					1.4消息提醒
					为提醒您防疫宝服务平台最新服务或活动，您的申办事项进展，向您推送政务信息、服务信息及活动信息，我们将收集您的手机号码、消息发送日期及消息内容。我们收集上述信息是为了通过短信和防疫宝服务平台及时提醒您上述消息。如不收集这类信息，我们将无法为您提供消息提醒服务。如您不希望收到消息提醒，您可以在防疫宝服务平台“设置-消息管理”中关闭消息提醒或短信回复“TD”，关闭消息提醒服务。
					1.5客户服务
					在您通过我们的反馈系统向我们提出投诉、建议或进行反馈时，为便于与您联系、尽快帮助您解决问题或记录相关问题的处理方案及结果，我们可能会收集您与我们的通信或通话记录、您提供的账号信息、您提供的联系方式信息、您为了证明相关事实提供的信息。我们收集上述信息是为了完成客户服务，如不收集这类信息，您的投诉、建议和反馈可能无法得到及时、有效处理，但不影响您正常使用我们的其他服务。
					1.6保障网络访问和服务的安全稳定
					为了保障我们的产品和服务以及您访问我们网络时的安全性和稳定性，防止您的个人信息被非法获取，以及更准确地预防欺诈和保护账户安全，我们会收集您的用户ID、设备信息（包括设备类型、设备型号、设备ID、操作系统类型和版本）、网络信息（网络类型、网络状态）、APP应用信息（应用下载渠道信息、APP前后台运行状态、APP进程信息、应用服务日志信息）、APP点击和使用记录、位置信息，并通过南京市大数据管理局运营的应用性能监控SDK收集您的设备信息（设备品牌、设备型号、无线网SSID名称、WIFI路由器MAC地址、OAID、设备IMSI、设备ANDROID_ID_、设备MEID、设备ICCID、设备硬件序列号、设备MAC地址、设备IMEI、手机系统重启时间、磁盘总空间、系统总内存空间、CPU数目、IDFA、IDFV、设备时区、软件系统版本相关信息、系统语言、屏幕宽度、屏幕高度、IP地址）、应用信息（APP名称、APP包名称、APP版本号、APP进程信息）、用户ID、运营商信息、网络类型。我们收集您的上述信息是为了防范您在使用我们的产品和服务时的安全风险，保障网络访问以及产品和服务的稳定运行。如不收集上述信息，则我们无法保障网络访问和服务的安全性和稳定性。
					2、我们如何使用您的个人信息
					2.1我们会根据本政策的约定并为实现我们的服务的目的对所收集的个人信息进行使用。
					2.2请您注意，您在使用我们提供的服务时所提供的所有个人信息，除非您删除或通过系统设置拒绝我们收集，否则将在您使用我们的服务期间持续授权我们使用。在您注销账号时，我们将停止使用并删除您的个人信息。
					2.3我们会对我们提供的服务使用情况进行统计，并可能会与公众或第三方共享这些统计信息，以用于产品开发、服务优化、安全保障的目的。但这些统计信息不包含您的任何身份识别信息。
					2.4当我们要将您的个人信息用于本政策未载明的其它用途时，或基于特定目的收集而来的信息用于其他目的时，会通过您主动做出勾选的形式事先征求您的同意，但具备其他合法事由时依法无需征求您的同意。
					2.5若您提供的信息中含有他人的个人信息，在向我们提供这些个人信息之前，您需确保您已经取得合法的授权。
					3、其他规则
					根据相关法律法规及国家标准，以下情形中，我们可能会收集、使用您的相关个人信息而无需征求您的授权同意：
					1)与个人信息控制者履行法律法规规定的义务相关的；
					2)与国家安全、国防安全直接相关的；
					3)与公共安全、公共卫生、重大公共利益直接相关的；
					4)与刑事侦查、起诉、审批和判决执行等直接相关的；
					5)出于维护个人信息主体或其他个人的生命、财产等重大合法权益但又很难得到本人授权同意的；
					6)所涉及的个人信息是个人信息主体自行向社会公众公开的；
					7)根据个人信息主体要求签订和履行合同所必须的；
					8)从合法公开披露的信息中收集个人信息的，如合法的新闻报道、政府信息公开等渠道；
					9)维护所提供产品或服务的安全稳定运行所必需的，如发现、处置产品或服务的故障；
					10)基于公共利益开展统计或学术研究所必要，且对外提供学术研究或描述的结果时，对结果中所包含的个人信息进行去标识化处理的；
					11)法律法规规定的其他情形。
					
					二、我们如何保存您的个人信息
					1、我们将在本政策载明的目的所需及法律法规要求的最短保存期限之内，保存您的个人信息。前述期限届满后，我们将对您的个人信息做删除或匿名化处理。
					2、我们在中国境内运营过程中收集和产生的个人信息将保存在中国境内（为本政策之目的，中国境内不含中国港澳台地区），以下情形除外：
					1)法律法规有明确规定的；
					2)获得您的明确授权；
					3)您要求获取境外服务等个人主动行为。
					针对以上情形，我们会确保依据本政策以及相关法律规定对您的个人信息提供足够的保护。
					</text>
				</view>
		</u-popup>
		<view style="height:400rpx;">
			<image style="margin: 0 auto;display:block;width:100%;height:250rpx;padding-top: 100rpx;" src="../../static/title.png"></image>			
		</view>
		<view class="content-wrapper">
			<view class="login-form">
				<view class="login-form-items" style="border-bottom:none;border-top-left-radius:5px;border-top-right-radius:5px;"><u-icon name="account" size="20" color="black"></u-icon>
					<view class="login-form-items-title">账号
					</view>
					<input v-model="phone" type="text" class="login-input" placeholder="请输入手机号">
				</view>
				<view class="login-form-items"  style="border-bottom-left-radius:5px;border-bottom-right-radius:5px;"><u-icon name="lock-open" size="20" color="black"></u-icon>
					<view class="login-form-items-title">密码
					</view>
					<input v-model="password" type="password" class="login-input" placeholder="请输入密码">
				</view>
			</view>
		</view>
		<view style="padding-left:60rpx;padding-right:50rpx;padding-bottom:70rpx;font-size:11px;line-height:50rpx;">
			<radio style="transform:scale(0.5);line-height:50rpx;" @click="change" :checked="check"></radio>
			<text>我已阅读并同意</text><text @click="showservice=true" style="color:#6495ED;">《用户服务协议》</text>、<text style="color:#6495ED;" @click="showprivacy=true">《防疫宝隐私政策》</text></view>
		<view style="display: flex;">
			<button size="default" class="btn" @click="login">登 录</button>
		</view>
		<view style="position:fixed;bottom:90rpx;width:100%;">
			<view style="margin-left:28%;">
				<u-icon name="arrow-rightward" :bold="true" color="#FFA200" size="23" label="我是核酸检测机构" labelSize="17" labelColor="#FFA200" @click="nattest"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	const sha256 = require("js-sha256").sha256;
	export default {
		data(){
			return{
				showservice: false,
				showprivacy: false,
				check:true,
				password: '',//zongqiwei2333
				phone: '',//10000101
			};
		},
		onShow() {
			let that=this;
			that.$natpoint.memberObj.nat_id='';
			that.$natpoint.memberObj.nat_account='';
			that.$natpoint.memberObj.nat_test='';
			that.$natpoint.memberObj.nat_testname='';
		},
		methods:{
			openprivacy(){
			},
			closeprivacy(){
				this.showprivacy=false;
			},
			openservice(){
			},
			closeservice(){
				this.showservice=false;
			},
			change(){
				if(this.check==true) this.check=false;
				else this.check=true;
			},
			nattest(){
				uni.redirectTo({
					url:"../Scancode/select"
				})
			},
			login(){
				/*uni.redirectTo({
					url:"../Scancode/scancode"
				})*/
				if(this.check==false){
					uni.showToast({
						icon:"none",
						title:"请阅读并同意相关协议"
					})
				} else{
					var account=this.phone.substr(0,6);
					uni.request({
						url:this.$BASE_URL.BASE_URL+'/natLogin',
						method:'POST',
						header:{
							'Content-Type': 'application/json',
						},
						data:{
							'nat_account':account,
							'nat_password':sha256(this.password),
						},
						success: (res) => {
							if(res.data.code==200){
								this.$natpoint.memberObj.nat_id=res.data.data.nat_pointid;
								this.$natpoint.memberObj.nat_account=res.data.data.nat_account;
								uni.redirectTo({
									url:"../Scancode/scancode"
								})
							}
							else{
								uni.showToast({
									icon:"none",
									title:"账号或密码有误"
								})
							}
						}
					})
				}
			},
		}
	}
</script>

<style>
	.content-wrapper {
		margin-top: 20rpx;
		width: 90%;
		padding-left: 5%;
	}
	
	.login-form {
		margin: 0px 10px 10px 15px;
		background: #FFFFFF;
		opacity: 0.8;
	}
	
	.login-form-items {
		padding: 30rpx 15px;
		border: 1px solid #d4d4d4;
		//#F3F4F5
		position: relative;
		display: -webkit-flex;
		display: flex;
	}
	
	.login-form-items-title {
		width: 27%;
		line-height: 22px;
		height: 22px;
		flex-shrink: 0;
		text-align: left;
	}
	
	.login-input {
		width: 100%
	}
	
	.submit-wrapper {
		padding: 10px;
		padding-top: 10px;
		display: flex;
	}
	
	.btn {
		width: 60%;
		font-weight: 500;
		color: 	#363636;
		background-color: rgb(255,162,0);
		margin-top: 10px;
		box-shadow: 0 1px 4px 1px #e6e6e6;
		color:white;
	}
	button:after{
		border:none;
	}
</style>
