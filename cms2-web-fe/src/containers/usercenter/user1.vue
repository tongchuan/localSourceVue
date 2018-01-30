<template lang="html">
  <div class="bg">
    <div class="row">
      <div class="col-xs-12 pt15">
        <div>
          <ul class="nav nav-tabs">
            <li v-for="(item,index) in getNavtitle" v-on:click="selectTitle(item,index)" role="presentation" v-bind:class="item.selected ? 'active' : ''"><a href="javascript:void(0)">{{item.name}}</a></li>
          </ul>
        </div>
        <!-- {{userStore.user}} -->
        <!-- 基本信息start -->
        <div v-if="selectedItem.tagName == 'base'" class="user-base-data">
          <div class="row">
            <div class="col-xs-3" style="text-align:center">
              <img class="user-photo" v-bind:src="avatar" />
              <p style="text-align:center">
                <upuserphoto upimgtype="userPhoto" upimgtitle="修改头像" v-on:getImageData="imageData" /></p>
            </div>
            <div class="col-xs-9">
              <form class="form-horizontal">
                <div class="form-group">
                  <label for="username" class="col-sm-2 control-label">姓名</label>
                  <div v-if="!isbaseEdit" class="col-sm-4">
                    <label class="lh35">{{username}}</label>
                  </div>
                  <div v-if="isbaseEdit" class="col-sm-4">
                    <input type="text" disabled v-model="username" class="form-control" placeholder="姓名">
                  </div>
                </div>
                <div v-if="1==2" class="form-group">
                  <label for="nickname" class="col-sm-2 control-label">用户名</label>
                  <div v-if="!isbaseEdit" class="col-sm-4">
                    <label class="lh35">{{nickname}}</label>
                  </div>
                  <div v-if="isbaseEdit" class="col-sm-4">
                    <input type="text" v-model="nickname" class="form-control" placeholder="用户名">
                  </div>
                </div>
                <div class="form-group">
                  <label for="sex" class="col-sm-2 control-label">性别</label>
                  <div v-if="!isbaseEdit" class="col-sm-4">
                    <label class="lh35">{{sex=='0' ? '男' : '女'}}</label>
                  </div>
                  <div v-if="isbaseEdit" class="col-sm-4 radio">
                    <label>
                      <input type="radio" disabled v-model="sex" value="0">男
                    </label>
                    <label>
                      <input type="radio" disabled v-model="sex" value="1">女
                    </label>
                  </div>
                </div>
                <div class="form-group">
                  <label for="birth_day" class="col-sm-2 control-label">生日</label>
                  <div v-if="!isbaseEdit" class="col-sm-4">
                    <label class="lh35">{{birth_day}}</label>
                  </div>
                  <div v-if="isbaseEdit" class="col-sm-4">
                    <input type="text" disabled v-model="birth_day" class="form-control" placeholder="生日">
                  </div>
                </div>
                <div class="form-group">
                  <label for="age" class="col-sm-2 control-label">年龄</label>
                  <div v-if="!isbaseEdit" class="col-sm-4">
                    <label class="lh35">{{age}}</label>
                  </div>
                  <div v-if="isbaseEdit" class="col-sm-4">
                    <input type="text" disabled v-model="age" class="form-control" placeholder="年龄">
                  </div>
                </div>
                <div class="form-group">
                  <label for="card" class="col-sm-2 control-label">证件号码</label>
                  <div v-if="!isbaseEdit" class="col-sm-4">
                    <label class="lh35">{{card}}</label>
                  </div>
                  <div v-if="isbaseEdit" class="col-sm-4">
                    <input type="text" disabled v-model="card" class="form-control" placeholder="证件号码">
                  </div>
                </div>
                <div class="form-group">
                  <label for="career" class="col-sm-2 control-label">职业</label>
                  <div v-if="!isbaseEdit" class="col-sm-4">
                    <label class="lh35">{{getCareer}}</label>
                  </div>
                  <div v-if="isbaseEdit" class="col-sm-4">
                    <select class="form-control" v-model="career">
                      <option value="" disabled>请选择职业</option>
                      <option v-for="item in careerList" v-bind:value="item.career_id">{{item.career_name}}</option>
                    </select>
                  </div>
                </div>
                <div class="form-group">
                  <label for="default_dress" class="col-sm-2 control-label">服装尺码</label>
                  <div v-if="!isbaseEdit" class="col-sm-4">
                    <label class="lh35">{{default_dress}}</label>
                  </div>
                  <div v-if="isbaseEdit" class="col-sm-4">
                    <select v-model="default_dress" class="form-control"  name="">
                      <option value="" disabled>请选择服装尺码</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                      <option value="2XL">2XL</option>
                      <option value="3XL">3XL</option>
                    </select>
                    <!-- <input type="text" v-model="default_dress" class="form-control" placeholder="服装尺码"> -->
                  </div>
                </div>
                <div class="form-group">
                  <label for="default_shoe_size" class="col-sm-2 control-label">鞋码</label>
                  <div v-if="!isbaseEdit" class="col-sm-4">
                    <label class="lh35">{{default_shoe_size}}</label>
                  </div>
                  <div v-if="isbaseEdit" class="col-sm-4">
                    <select v-model="default_shoe_size" class="form-control"  name="">
                      <option value="" disabled>请选鞋码</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40</option>
                      <option value="41">41</option>
                      <option value="42">42</option>
                      <option value="43">43</option>
                      <option value="44">44</option>
                      <option value="45">45</option>
                    </select>
                    <!-- <input type="text" v-model="default_shoe_size" class="form-control" placeholder="鞋码"> -->
                  </div>
                </div>

                <div v-if="declare==0" class="form-group">
                  <label class="col-sm-2 control-label">特跑族会员</label>
                  <div class="col-sm-4 redio">
                    <label class="radio-inline" v-on:click="messageshengming=true">
                      <input type="radio" value="是"> 我要成为特跑族会员
                    </label>
                  </div>
                </div>

                <div class="form-group">
                  <div v-if="!isbaseEdit" class="col-sm-offset-2 col-sm-10">
                    <button type="button" @click="isbaseEdit=true" class="btn btn-default">修改信息</button>
                  </div>
                  <div v-if="isbaseEdit" class="col-sm-offset-2 col-sm-10">
                    <button type="button" @click="cancelBtn('isbaseEdit')" class="btn btn-default">取消</button>
                    <button type="button" @click="baseEditSubmit" class="btn btn-warning">保存信息</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <!-- 基本信息end -->
        <!-- 联系信息start -->
        <div v-if="selectedItem.tagName == 'contact'" class="user-base-data">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="phone" class="col-sm-4 control-label">手机号码</label>
              <div v-if="!iscontactEdit" class="col-sm-4">
                <label class="lh35">{{phone}}</label>
              </div>
              <div v-if="iscontactEdit" class="col-sm-4">
                <input type="text" v-model="phone" class="form-control" placeholder="手机号码">
              </div>
            </div>
            <div class="form-group">
              <label for="email" class="col-sm-4 control-label">个人邮箱</label>
              <div v-if="!iscontactEdit" class="col-sm-4">
                <label class="lh35">{{email}}</label>
              </div>
              <div v-if="iscontactEdit" class="col-sm-4">
                <input type="text" v-model="email" class="form-control" placeholder="个人邮箱">
              </div>
            </div>

            <div class="form-group">
              <label for="qq" class="col-sm-4 control-label">QQ号码</label>
              <div v-if="!iscontactEdit" class="col-sm-4">
                <label class="lh35">{{qq}}</label>
              </div>
              <div v-if="iscontactEdit" class="col-sm-4">
                <input type="text" v-model="qq" class="form-control" placeholder="QQ号码">
              </div>
            </div>
            <div class="form-group">
              <label for="weibo" class="col-sm-4 control-label">新浪微博</label>
              <div v-if="!iscontactEdit" class="col-sm-4">
                <label class="lh35">{{weibo}}</label>
              </div>
              <div v-if="iscontactEdit" class="col-sm-4">
                <input type="text" v-model="weibo" class="form-control" placeholder="新浪微博">
              </div>
            </div>
            <div class="form-group">
              <label for="weixin" class="col-sm-4 control-label">微信</label>
              <div v-if="!iscontactEdit" class="col-sm-4">
                <label class="lh35">{{weixin}}</label>
              </div>
              <div v-if="iscontactEdit" class="col-sm-4">
                <input type="text" v-model="weixin" class="form-control" placeholder="微信">
              </div>
            </div>
            <div class="form-group">
              <label for="province" class="col-sm-4 control-label">居住城市</label>
              <div v-if="!iscontactEdit" class="col-sm-4">
                <label class="lh35">{{getProvince}}省 ／ {{getCity}}市</label>
              </div>
              <div v-if="iscontactEdit" class="col-sm-2">
                <select class="form-control" v-model="province">
                  <option value="" disabled>请选择省</option>
                  <option v-for="item in provinceList" v-bind:value="item.province_id">{{item.province_name}}</option>
                </select>
              </div>
              <div v-if="iscontactEdit" class="col-sm-2">
                <select class="form-control" v-model="city">
                  <option value="" disabled>请选择市</option>
                  <option v-for="item in cityList" v-bind:value="item.city_id">{{item.city_name}}</option>
                </select>
              </div>
            </div>
            <div class="form-group">
              <label for="address" class="col-sm-4 control-label">通讯地址</label>
              <div v-if="!iscontactEdit" class="col-sm-4">
                <label class="lh35">{{address}}</label>
              </div>
              <div v-if="iscontactEdit" class="col-sm-4">
                <input type="text" v-model="address" class="form-control" placeholder="通讯地址">
              </div>
            </div>
            <div class="form-group">
              <label for="emergency_people" class="col-sm-4 control-label">紧急联系人</label>
              <div v-if="!iscontactEdit" class="col-sm-4">
                <label class="lh35">{{emergency_people}}</label>
              </div>
              <div v-if="iscontactEdit" class="col-sm-4">
                <input type="text" v-model="emergency_people" class="form-control" placeholder="紧急联系人">
              </div>
            </div>
            <div class="form-group">
              <label for="emergency_people_relationship" class="col-sm-4 control-label">紧急联系人关系</label>
              <div v-if="!iscontactEdit" class="col-sm-4">
                <label class="lh35">{{emergency_people_relationship}}</label>
              </div>
              <div v-if="iscontactEdit" class="col-sm-4">
                <input type="text" v-model="emergency_people_relationship" class="form-control" placeholder="紧急联系人关系">
              </div>
            </div>
            <div class="form-group">
              <label for="emergency_people_phone" class="col-sm-4 control-label">紧急联系人电话</label>
              <div v-if="!iscontactEdit" class="col-sm-4">
                <label class="lh35">{{emergency_people_phone}}</label>
              </div>
              <div v-if="iscontactEdit" class="col-sm-4">
                <input type="text" v-model="emergency_people_phone" class="form-control" placeholder="紧急联系人电话">
              </div>
            </div>

            <div class="form-group">
              <div v-if="!iscontactEdit" class="col-sm-offset-4 col-sm-8">
                <button type="submit" @click="iscontactEdit=true" class="btn btn-default">修改信息</button>
              </div>
              <div v-if="iscontactEdit" class="col-sm-offset-4 col-sm-8">
                <button type="button" @click="cancelBtn('iscontactEdit')" class="btn btn-default">取消</button>
                <button type="button" @click="baseEditSubmit" class="btn btn-warning">保存信息</button>
              </div>
            </div>
          </form>
        </div>
        <!-- 联系信息end -->
        <!-- 赛事信息start -->
        <div v-if="selectedItem.tagName == 'event'" class="user-base-data">
          <form class="form-horizontal">
            <div class="form-group">
              <label for="my_group" class="col-sm-4 control-label">所在跑步团体</label>
              <div v-if="!iseventEdit" class="col-sm-4">
                <label class="lh35">{{my_group}}</label>
              </div>
              <div v-if="iseventEdit" class="col-sm-4">
                <input type="text" v-model="my_group" class="form-control" placeholder="所在跑步团体">
              </div>
            </div>
            <div class="form-group">
              <label for="is_invite_marathon" class="col-sm-4 control-label">是否参加过马拉松</label>
              <div v-if="!iseventEdit" class="col-sm-4">
                <label class="lh35">{{is_invite_marathon}}</label>
              </div>
              <div v-if="iseventEdit" class="col-sm-4 redio">
                <label class="radio-inline">
                  <input type="radio" v-model="is_invite_marathon" value="是"> 是
                </label>
                <label class="radio-inline">
                  <input type="radio"  v-model="is_invite_marathon" value="否"> 否
                </label>
                <!-- <input type="text" v-model="is_invite_marathon" class="form-control" placeholder="是否参加过马拉松"> -->
              </div>
            </div>
            <div v-if="is_invite_marathon=='是'" class="form-group">
              <label for="marathon_times" class="col-sm-4 control-label">参加马拉松赛事次数</label>
              <div v-if="!iseventEdit" class="col-sm-4">
                <label class="lh35">{{marathon_times}}</label>
              </div>
              <div v-if="iseventEdit" class="col-sm-4">
                <input type="number" v-model="marathon_times" class="form-control" placeholder="参加马拉松赛事次数">
              </div>
            </div>
            <div class="form-group">
              <label for="marathon_info" class="col-sm-4 control-label">马拉松赛段</label>
              <div v-if="!iseventEdit" class="col-sm-4">
                <label class="lh35">{{marathon_info}}</label>
              </div>
              <div v-if="iseventEdit" class="col-sm-8">
                <label class="radio-inline">
                  <input type="radio" v-model="marathon_info" value="全程马拉松"> 全程马拉松
                </label>
                <label class="radio-inline">
                  <input type="radio"  v-model="marathon_info" value="半程马拉松"> 半程马拉松
                </label>
                <label class="radio-inline">
                  <input type="radio" v-model="marathon_info" value="9-10公里"> 9-10公里
                </label>
                <label class="radio-inline">
                  <input type="radio"  v-model="marathon_info" value="4-5公里"> 4-5公里
                </label>
                <!-- <input type="text" v-model="marathon_info" class="form-control" placeholder="马拉松赛段"> -->
              </div>
            </div>
            <div v-if="marathon_info=='全程马拉松' || marathon_info=='半程马拉松'" class="form-group">
              <label for="best_marathon" class="col-sm-4 control-label">个人全程马拉松最好成绩</label>
              <div v-if="!iseventEdit" class="col-sm-4">
                <label class="lh35">{{best_marathon}}</label>
              </div>
              <div v-if="iseventEdit" class="col-sm-4">
                <Time-picker v-model:value="best_marathon" format="HH点mm分ss秒" placeholder="个人全程马拉松最好成绩"></Time-picker>
                <!-- <input type="text" v-model="best_marathon" class="form-control" placeholder="个人全程马拉松最好成绩"> -->
              </div>
            </div>
            <div class="form-group">
              <div v-if="!iseventEdit" class="col-sm-offset-4 col-sm-8">
                <button type="submit" @click="iseventEdit=true" class="btn btn-default">修改信息</button>
              </div>
              <div v-if="iseventEdit" class="col-sm-offset-4 col-sm-8">
                <button type="button" @click="cancelBtn('iseventEdit')" class="btn btn-default">取消</button>
                <button type="button" @click="baseEditSubmit" class="btn btn-warning">保存信息</button>
              </div>
            </div>
          </form>
        </div>
        <!-- 赛事信息end -->
        <!-- 我的勋章start -->
        <div v-if="selectedItem.tagName == 'medal'" class="user-base-data">
          <div class="user-foot-main">
            <div v-for="item in userStore.medal" class="medal-item">
              <img v-bind:src="item.pic" style="border-radius:0" />
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
        <!-- 我的勋章end -->
      </div>
    </div>
    <Modal
        title="迅驰体育跑者服务系统用户协议"
        v-model="messageshengming"
        :mask-closable="false"
        width="800"
        class-name="vertical-center-modal">
        <h4 style="text-align:center">迅驰体育跑者服务系统用户协议</h4>
        <p>北京迅驰体育管理有限公司（以下称”北京迅驰体育”）为迅驰体育跑者服务系统（以下称”跑者服务系统”）的实际开发者和运营者。迅驰体育跑者服务系统是一款专业服务于马拉松赛事的平台, 同时也是特步特跑族官方唯一指定移动端报名通道；用户通过迅驰体育跑者服务系统能轻松实现查询全面详细的赛事信息、赛事报名、领物、查询及管理所有参与的赛事和相应成绩，并可在线兑换会员积分，购买商品。本用户协议构成北京迅驰与跑者服务系统用户（以下称”用户”或”您”）之间就迅驰体育跑者服务系统提供的上述服务等事宜订立的契约，请仔细阅读本用户协议。您注册成为用户后，即表示您同意接受本用户协议的约束，而本用户协议即构成对双方具有约束力的法律文件。</p>
        <h5>一、用户协议的确认及接受</h5>
        <p>
        1.1 迅驰体育跑者服务系统的所有权和运营权归北京迅驰体育所有。您同意用户协议并完成注册程序后，即成为北京迅驰体育的正式用户。用户确认：本用户协议是处理双方权利义务的契约，自始有效，法律另有强制性规定或双方另有特别约定的，从其规定。
        <br />1.2 您点击同意本用户协议，即视为您确认自己已具有与享受本应用提供的各项服务相对应的权利能力和行为能力，并能够独立承担法律责任。
        <br />1.3 如果您未满18周岁，您须在在父母或监护人的监护参与下才能使用本应用的有偿服务项目。
        <br />1.4 北京迅驰体育保留在中华人民共和国大陆地区法现行法律法规允许的范围内自行决定拒绝服务、关闭用户账户、清除或编辑内容或取消订单等的权利。
        <br />1.5 北京迅驰体育的软件著作权及其发布的所有信息与内容的版权均受中华人民共国著作权法（含相关法律、法规）乃至世界版权法律的保护，仅供用户因自身学习、调研等目的免费使用。严禁未经授权对本应用内容进行复制、发行、出租、展览、放映、广播、修改、演绎、翻译、汇编、改编或逆向工程。北京迅驰体育管理有限公司保留所有未在本用户协议中明确授予的权利。
        <br />1.6 北京迅驰体育通过互联网依法为用户提供互联网信息等服务，您在完全同意本用户协议及北京迅驰体育其他规定的情况下，方有权使用相关服务。
        <br />1.7 用户必须自行准备如下设备并承担如下开支：<br />
          （1）上网设备，包括并不限于智能手机、电脑或者其他上网终端、调制解调器及其他必备的上网装置；<br />
          （2）上网开支，包括并不限于网络接入费、上网设备租用费、手机流量费等.</p>
        <h5>二、北京迅驰体育跑者服务系统账号注册规则</h5>
        <p>
          3.1 用户必须遵守中华人民共和国及国际相关法律法规的规定，独立对其发布的内容（包括但不限于文字、图片等）承担责任。用户承诺：<br />
          （1）用户在使用我们提供的服务或在北京迅驰体育跑者服务系统上发布信息时必须符合中华人民共和国相关法律法规的规定，不得制作、复制、发布、传播以下内容或信息：
        <br />        (a) 违反宪法确定的基本原则的；
        <br />        (b) 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；
        <br />        (c) 损害国家荣誉和利益的；
        <br />        (d) 煽动民族仇恨、民族歧视，破坏民族团结的；
        <br />        (e) 破坏国家宗教政策，宣扬邪教和封建迷信的；
        <br />        (f) 散布谣言，扰乱社会秩序，破坏社会稳定的；
        <br />        (g) 散布淫秽、色情、赌博、暴力、恐怖或者教唆犯罪的；
        <br />        (h) 侮辱或者诽谤他人，侵害他人合法权益的；
        <br />        (i) 煽动非法集会、结社、游行、示威、聚众扰乱社会秩序的；
        <br />        (j) 以非法民间组织名义活动的；
        <br />        (k) 含有法律、行政法规禁止的其他内容或违反北京迅驰体育跑者服务系统的其他规定的。
        <br />       （2）用户在使用我们提供的服务或在我们提供的平台上发布信息时还必须符合其他有关国家和地区的法律规定以及国际法的有关规定。
        <br />3.2 用户理解并同意，其在北京迅驰体育跑者服务系统上发布的任何信息（包括但不限于文字、图片等），均已自动授权北京迅驰体育跑者服务系统在包含宣传推广在内的各个合法途径使用。若用户对北京迅驰体育跑者服务系统使用信息的方式存有异议，应在发现后及时联系我们进行沟通解决，若用户未对北京迅驰体育跑者服务系统的使用行为提出异议，则默认其同意此种使用行为且无权就上述使用主张权利。
        <br />3.3 用户不得以任何方式干扰北京迅驰体育跑者服务系统服务且不得通过北京迅驰体育跑者服务系统发布任何形式的广告，北京迅驰体育跑者服务系统对用户发布的广告内容有权进行包括但不限于删除内容直至关闭账号的处理。因网络信息传播在时间上的即时性及空间上的广泛性，我们不可能在第一时间对用户发布广告的行为进行处理，在此提请用户需对此种广告的内容自行甄别，因用户受此种广告内容的影响而产生的任何损失，均与北京迅驰体育或北京迅驰体育跑者服务系统无关。北京迅驰体育跑者服务系统鼓励用户对上述广告发布行为进行举报，我们会在收到举报后及时处理。
        <br />3.4 责任承担
        <br />    （1）用户须对自己在使用北京迅驰体育跑者服务系统服务过程中的行为承担法律责任。用户承担法律责任的形式包括但不限于：对受到侵害者进行赔偿，以及在北京迅驰体育首先承担了因用户行为导致的行政处罚或侵权损害赔偿责任后，用户应给予北京迅驰体育等额的赔偿。若用户违反以上规定，我们有权作出独立判断立即暂停或终止对用户提供部分或全部服务，包括锁定、注销、删除用户北京迅驰体育跑者服务系统账号等措施。
        <br />    （2）用户理解，如果北京迅驰体育跑者服务系统发现其发布的信息明显属于本条第（1）款所列内容之一，依据中华人民共和国现行相关法律，北京迅驰体育跑者服务系统有义务立即停止传输，保存有关记录，向国家有关机关报告，并且删除含有该内容的地址、目录或关闭服务器。
        </p>
        <h5>四、用户隐私制度</h5>
        <p> 4.1 用户知悉并同意，为了记录用户参赛的真实数据以及给用户提供赛事报名等相关服务，我们在您自愿的前提下收集您的个人信息并将这些信息进行整合，包括但不限于注册账号时的相关信息、账号登录后的补充信息、收货人的姓名、地址、电话等。
        <br /> 4.2 尊重用户个人隐私是北京迅驰体育跑者服务系统的一项基本政策。所以，北京迅驰体育跑者服务系统不会公开或向任何第三方透露用户的注册资料以及用户因享受北京迅驰体育跑者服务系统服务而提供的任何信息，但以下情形除外:
        <br />   （1）事先获得用户的明确授权或许可；
        <br />   （2）遵守有关法律规定，包括在国家有关机关查询时，提供用户的注册信息、用户在北京迅驰体育跑者服务系统发布的信息内容及其发布时间、互联网地址或者域名等。
        </p>
        <h5>五、所有权及知识产权条款</h5>
        <p>
        5.1 用户一旦接受本用户协议，即表明该用户主动将其在北京迅驰体育跑者服务系统及其相关平台上发表的任何形式的信息内容（包括但不限于用户评论、用户咨询、各类话题文章、赛事照片等）的财产性权利等任何可转让的权利，如著作权财产权（包括并不限于：复制权、发行权、出租权、展览权、表演权、放映权、广播权、信息网络传播权、摄制权、改编权、翻译权、汇编权以及应当由著作权人享有的其他可转让权利）等，全部独家且不可撤销地转让给北京迅驰体育所有，用户同意北京迅驰体育有权就任何主体侵权而单独提起诉讼。
        <br />5.2 本条款已经构成《中华人民共和国著作权法》第二十五条及相关法律规定的著作财产权等权利转让的书面协议，其效力及于用户在北京迅驰体育跑者服务系统上发布的任何受著作权法保护的作品内容，无论该等内容形成于本用户协议订立前还是订立后。
        <br />5.3 用户同意并已充分了解本条款的含义，承诺不将已发表于北京迅驰体育跑者服务系统的信息，以任何形式发布或授权其它主体以任何方式使用（包括但不限于在各类网站、媒体上使用）。
        <br />5.4 北京迅驰体育（含其关联企业）是北京迅驰体育跑者服务系统的所有者及运营者，拥有北京迅驰体育跑者服务系统内容、资源及软件的著作权等合法权利，受国家法律保护，有权不时地对本用户协议、北京迅驰体育跑者服务系统内容进行修改或更新，并张贴或直接更新，无须另行通知用户。在法律允许的最大限度范围内，北京迅驰体育（含其关联企业）对本协议及北京迅驰体育跑者服务系统内容拥有解释权。
        <br />5.5 除法律另有强制性规定外，未经北京迅驰体育（含其关联企业）明确的特别书面许可，任何单位或个人不得以任何方式非法地全部或部分复制、转载、引用、链接、抓取或以其他方式使用北京迅驰体育跑者服务系统内的信息内容，否则，北京迅驰体育有权追究其法律责任。
        <br />5.6 北京迅驰体育跑者服务系统所刊登的资料信息（诸如文字、图表、标识、按钮图标、图像、声音文件片段、 数字下载、数据编辑和软件），均是北京迅驰体育或其内容提供者的财产，受中华人民共和国和国际版权法及相关法律法规的保护；上述内容的汇编是北京迅驰体育的排他财产，受中华人民共和国和国际版权法及相关法律法规的保护；北京迅驰体育跑者服务系统所有版本都是北京迅驰体育（含其关联公司）的财产，受中华人民共和国和国际版权法及相关法律法规的保护。
        </p>
        <h5>六、责任限制及不承诺担保</h5>
        <p>
          6.1 除非另有明确的书面说明，北京迅驰体育跑者服务系统提供给您的全部信息、内容、材料、产品和服务，均是在”按现状”和”按现有”的基础上提供的。
        <br />6.2 除非另有明确的书面说明，我们不对北京迅驰体育跑者服务系统的运营及其包含的信息、内容、材料、产品或服务作任何形式的、明示或默示的声明或担保（根据中华人民共和国法律另有规定的以外）。
        <br />6.3 我们不担保北京迅驰体育跑者服务系统所包含的或以其它方式通过北京迅驰体育跑者服务系统提供给您的全部信息、内容、材料、产品和服务、其服务器或从北京迅驰体育跑者服务系统发出的电子信件、信息没有病毒或其他有害成分。
        <br />6.4 如因不可抗力或其它我们无法控制的原因使本应用的服务系统崩溃或无法正常使用导致服务不可用或网上交易无法完成或丢失有关的信息、记录等，我们会合理地尽力协助处理善后事宜。
        </p>
        <h5>七、协议更新及用户关注义务</h5>
        <p>
          根据国家法律法规的更新及实际运营需要，我们有权对本协议不时地进行修改，修改后的用户协议在北京迅驰体育跑者服务系统上一经公布即生效力，并代替原来的用户协议。用户可随时登录查阅最新用户协议内容。如用户不同意更新后的用户协议，应立即停止接受本应用提供的服务；如用户继续使用本应用提供的服务，即视为同意更新后的用户协议。我们建议您在使用本应用前阅读本用户协议及有关公告。如果本用户协议中任何一条被视为废止、无效或因任何理由不可执行，该条应视为可分的且并不影响任何其余条款的有效性和可执行性。
        </p>
        <h5>八、法律管辖和适用</h5>
        <p>本用户协议的订立、执行和解释及争议的解决均应适用在中华人民共和国大陆地区现行之有效法律。如发生本用户协议的某些内容与适用之法律相抵触时，则这些条款将完全按法律规定重新解释，而其它有效条款继续有效。如缔约方就本条款内容或其执行发生任何争议，双方应尽力友好协商解决；协商不成时，任何一方均可向有管辖权的中华人民共和国大陆地区法院提起诉讼。
        </p>
        <div slot="footer">
            <Button @click="messageshengming=false;btnTime=10">取消</Button>
            <Button type="info" v-bind:disabled="btndisabled" @click="btnClick">{{btnTime}}确定</Button>
        </div>
    </Modal>
  </div>
</template>

<script>
// 帐号379002197401218016，密码218016
import { mapGetters, mapActions } from 'vuex'
import upuserphoto from '@/components/common/upuserphoto'
import { USER_MEDAL, USER_UPDATA } from '@/store/modules/userStore'
import { GET_PROVINCE, GET_CITY, GET_CAREER } from '@/store/modules/dicStore'
export default {
  name: 'basedata',
  data () {
    return {
      id: '',
      uid: '',
      avatar: '',
      nickname: '',
      username: '',
      email: '',
      phone: '',
      sex: '',
      birth_day: '',
      card: '',
      career: '',
      province: '',
      city: '',
      address: '',
      item_category: '',
      default_dress: '',
      default_shoe_size: '',
      membership: '',
      membership_code: '',
      is_apply_membership: '',
      is_active: '',
      authority: '',
      ctime: '',
      utime: '',
      age: '',
      qq: '',
      weixin: '',
      my_group: '',
      emergency_people_phone: '',
      emergency_people: '',
      emergency_people_relationship: '',
      is_invite_marathon: '',
      marathon_times: '',
      marathon_info: '',
      best_marathon: '00:00:00',
      weibo: '',
      membership_ctime: '',
      declare: 0,
      navtitle: [
        {name: '基本资料', selected: true, tagName: 'base'},
        {name: '联系信息', selected: false, tagName: 'contact'},
        {name: '赛事信息', selected: false, tagName: 'event'}
      ],
      isbaseEdit: false,
      iscontactEdit: false,
      iseventEdit: false,
      ismedalEdit: false,
      messageshengming: false,
      btndisabled: true,
      btnTime: 10
    }
  },
  computed: {
    ...mapGetters({
      userStore: 'userStore',
      dicStore: 'dicStore'
    }),
    selectedItem () {
      let that = this
      let data = {}
      that.navtitle.forEach((item) => {
        if (item.selected) {
          data = Object.assign({}, item)
        }
      })
      return data
    },
    getNavtitle () {
      let that = this
      // if (that.declare === 1) {
      if (that.userStore.user.is_apply_membership === 2 && that.navtitle.length < 4) {
        that.navtitle.push({name: '我的勋章', selected: false, tagName: 'medal'})
      }
      return this.navtitle
    },
    provinceList () {
      let that = this
      // if (!that.province) {
      //   that.province = that.dicStore.province[0] && that.dicStore.province[0].province_id ? that.dicStore.province[0].province_id : ''
      // }
      return that.dicStore.province
    },
    cityList () {
      let that = this
      let data = []
      for (let i in that.dicStore.city) {
        let item = that.dicStore.city[i]
        if (Number(item.province_id) === Number(that.province)) {
          // if (!that.city) {
          //   that.city = item.citys[0] && item.citys[0].city_id ? item.citys[0].city_id : ''
          // }
          data = item.citys
        }
      }
      return data
    },
    careerList () {
      let that = this
      return that.dicStore.career
    },
    getCareer () {
      let that = this
      let name = ''
      that.dicStore.career.forEach((item) => {
        if (Number(that.career) === Number(item.career_id)) {
          name = item.career_name
        }
      })
      return name
    },
    getProvince () {
      let that = this
      let name = ''
      that.dicStore.province.forEach((item) => {
        if (Number(that.province) === Number(item.province_id)) {
          console.log(item)
          name = item.province_name
        }
      })
      return name
    },
    getCity () {
      let that = this
      let name = ''
      that.cityList.forEach((item) => {
        if (Number(that.city) === Number(item.city_id)) {
          name = item.city_name
        }
      })
      return name
    }
  },
  components: {
    upuserphoto
  },
  created () {
    let that = this
    that.USER_MEDAL()
    that.id = that.userStore.user.id
    that.uid = that.userStore.user.uid
    that.avatar = that.userStore.user.avatar
    that.nickname = that.userStore.user.nickname
    that.username = that.userStore.user.username
    that.email = that.userStore.user.email
    that.phone = that.userStore.user.phone
    that.sex = that.userStore.user.sex
    that.birth_day = that.userStore.user.birth_day
    that.card = that.userStore.user.card
    that.career = that.userStore.user.career
    that.province = that.userStore.user.province
    that.city = that.userStore.user.city
    that.address = that.userStore.user.address
    that.item_category = that.userStore.user.item_category
    that.default_dress = that.userStore.user.default_dress
    that.default_shoe_size = that.userStore.user.default_shoe_size
    that.membership = that.userStore.user.membership
    that.membership_code = that.userStore.user.membership_code
    that.is_apply_membership = that.userStore.user.is_apply_membership
    that.is_active = that.userStore.user.is_active
    that.authority = that.userStore.user.authority
    that.ctime = that.userStore.user.ctime
    that.utime = that.userStore.user.utime
    that.age = that.userStore.user.age
    that.qq = that.userStore.user.qq
    that.weixin = that.userStore.user.weixin
    that.my_group = that.userStore.user.my_group
    that.emergency_people_phone = that.userStore.user.emergency_people_phone
    that.emergency_people = that.userStore.user.emergency_people
    that.emergency_people_relationship = that.userStore.user.emergency_people_relationship
    that.is_invite_marathon = that.userStore.user.is_invite_marathon
    that.marathon_times = that.userStore.user.marathon_times
    that.marathon_info = that.userStore.user.marathon_info
    that.best_marathon = that.userStore.user.best_marathon !== '' ? that.formatTime(that.userStore.user.best_marathon) : '00:00:00'
    that.weibo = that.userStore.user.weibo
    that.membership_ctime = that.userStore.user.membership_ctime
    that.declare = that.userStore.user.is_apply_membership ? that.userStore.user.is_apply_membership : 0
    that.GET_PROVINCE({})
    that.GET_CITY({})
    that.GET_CAREER({})
  },
  methods: {
    ...mapActions([USER_MEDAL, USER_UPDATA, GET_PROVINCE, GET_CITY, GET_CAREER]),
    selectTitle (item, index) {
      let that = this
      that.navtitle.forEach((ditem) => {
        ditem.selected = false
      })
      item.selected = true
    },
    baseEditSubmit () {
      let that = this
      that.membership_ctime = that.membership_ctime.length > 8 ? that.formatTime(that.membership_ctime.length) : that.membership_ctime.length === 8 ? that.membership_ctime : '00:00:00'
      let data = {}
      data.id = that.id
      data.uid = that.uid
      data.avatar = that.avatar
      data.nickname = that.nickname
      data.username = that.username
      data.email = that.email
      data.phone = that.phone
      data.sex = that.sex
      data.birth_day = that.birth_day
      data.card = that.card
      data.career = that.career
      data.province = that.province
      data.city = that.city
      data.address = that.address
      data.item_category = that.item_category
      data.default_dress = that.default_dress
      data.default_shoe_size = that.default_shoe_size
      data.membership = that.membership
      data.membership_code = that.membership_code
      data.is_apply_membership = that.declare
      data.is_active = that.is_active
      data.authority = that.authority
      data.ctime = that.ctime
      data.utime = that.utime
      data.age = that.age
      data.qq = that.qq
      data.weixin = that.weixin
      data.my_group = that.my_group
      data.emergency_people_phone = that.emergency_people_phone
      data.emergency_people = that.emergency_people
      data.emergency_people_relationship = that.emergency_people_relationship
      data.is_invite_marathon = that.is_invite_marathon
      data.marathon_times = that.marathon_times
      data.marathon_info = that.marathon_info
      data.best_marathon = that.best_marathon
      data.weibo = that.weibo
      data.membership_ctime = that.membership_ctime
      data.declare = Number(that.declare) === 0 ? 0 : 1
      // that.userStore.user.is_apply_membership ? that.userStore.user.is_apply_membership : 0
      that.USER_UPDATA([data, (err, data) => {
        if (err === undefined) {
          if (Number(data.errno) === 0) {
            that.isbaseEdit = false
            that.iscontactEdit = false
            that.iseventEdit = false
            that.ismedalEdit = false
          } else {
            that.$Modal.error({
              title: '错误提示',
              content: data.msg,
              onOk: () => {
              }
            })
          }
        } else {
          that.$Modal.error({
            title: '错误提示',
            content: err.toString(),
            onOk: () => {
            }
          })
        }
      }])
    },
    imageData (type, data) {
      let that = this
      if (type === 'userPhoto') {
        that.avatar = data.data.avatar
        console.log(data)
        console.log(data.avatar)
        // that.baseEditSubmit()
      }
    },
    cancelBtn (type) {
      let that = this
      that.id = that.userStore.user.id
      that.uid = that.userStore.user.uid
      that.avatar = that.userStore.user.avatar
      that.nickname = that.userStore.user.nickname
      that.username = that.userStore.user.username
      that.email = that.userStore.user.email
      that.phone = that.userStore.user.phone
      that.sex = that.userStore.user.sex
      that.birth_day = that.userStore.user.birth_day
      that.card = that.userStore.user.card
      that.career = that.userStore.user.career
      that.province = that.userStore.user.province
      that.city = that.userStore.user.city
      that.address = that.userStore.user.address
      that.item_category = that.userStore.user.item_category
      that.default_dress = that.userStore.user.default_dress
      that.default_shoe_size = that.userStore.user.default_shoe_size
      that.membership = that.userStore.user.membership
      that.membership_code = that.userStore.user.membership_code
      that.is_apply_membership = that.userStore.user.is_apply_membership
      that.is_active = that.userStore.user.is_active
      that.authority = that.userStore.user.authority
      that.ctime = that.userStore.user.ctime
      that.utime = that.userStore.user.utime
      that.age = that.userStore.user.age
      that.qq = that.userStore.user.qq
      that.weixin = that.userStore.user.weixin
      that.my_group = that.userStore.user.my_group
      that.emergency_people_phone = that.userStore.user.emergency_people_phone
      that.emergency_people = that.userStore.user.emergency_people
      that.emergency_people_relationship = that.userStore.user.emergency_people_relationship
      that.is_invite_marathon = that.userStore.user.is_invite_marathon
      that.marathon_times = that.userStore.user.marathon_times
      that.marathon_info = that.userStore.user.marathon_info
      that.best_marathon = that.userStore.user.best_marathon !== '' ? that.formatTime(that.userStore.user.best_marathon) : '00:00:00'
      that.weibo = that.userStore.user.weibo
      that.membership_ctime = that.userStore.user.membership_ctime
      that.declare = that.userStore.user.is_apply_membership ? that.userStore.user.is_apply_membership : 0
      if (type === 'isbaseEdit') {
        that.isbaseEdit = false
      } else if (type === 'iscontactEdit') {
        that.iscontactEdit = false
      } else if (type === 'iseventEdit') {
        that.iseventEdit = false
      }
    },
    btnClick () {

    }
  },
  watch: {
    messageshengming (newVal, oldVal) {
      if (newVal) {
        let that = this
        that.btndisabled = true
        let setIntVal = setInterval(function () {
          that.btnTime --
          if (that.btnTime === 0) {
            that.btndisabled = false
            that.messageshengming = false
            that.declare = 1
            that.baseEditSubmit()
            clearInterval(setIntVal)
          }
        }, 1000)
      }
    },
    // best_marathon (newVal, oldVal) {
    //   let that = this
    //   that.best_marathon = newVal !== '' ? that.formatTime(newVal) : '00:00:00'
    // },
    'userStore.user' (newVal, oldVal) {
      let that = this
      that.id = that.userStore.user.id
      that.uid = that.userStore.user.uid
      that.avatar = that.userStore.user.avatar
      that.nickname = that.userStore.user.nickname
      that.username = that.userStore.user.username
      that.email = that.userStore.user.email
      that.phone = that.userStore.user.phone
      that.sex = that.userStore.user.sex
      that.birth_day = that.userStore.user.birth_day
      that.card = that.userStore.user.card
      that.career = that.userStore.user.career
      that.province = that.userStore.user.province
      that.city = that.userStore.user.city
      that.address = that.userStore.user.address
      that.item_category = that.userStore.user.item_category
      that.default_dress = that.userStore.user.default_dress
      that.default_shoe_size = that.userStore.user.default_shoe_size
      that.membership = that.userStore.user.membership
      that.membership_code = that.userStore.user.membership_code
      that.is_apply_membership = that.userStore.user.is_apply_membership
      that.is_active = that.userStore.user.is_active
      that.authority = that.userStore.user.authority
      that.ctime = that.userStore.user.ctime
      that.utime = that.userStore.user.utime
      that.age = that.userStore.user.age
      that.qq = that.userStore.user.qq
      that.weixin = that.userStore.user.weixin
      that.my_group = that.userStore.user.my_group
      that.emergency_people_phone = that.userStore.user.emergency_people_phone
      that.emergency_people = that.userStore.user.emergency_people
      that.emergency_people_relationship = that.userStore.user.emergency_people_relationship
      that.is_invite_marathon = that.userStore.user.is_invite_marathon
      that.marathon_times = that.userStore.user.marathon_times
      that.marathon_info = that.userStore.user.marathon_info
      that.best_marathon = that.userStore.user.best_marathon !== '' ? that.formatTime(that.userStore.user.best_marathon) : '00:00:00'
      that.weibo = that.userStore.user.weibo
      that.membership_ctime = that.userStore.user.membership_ctime
      that.declare = that.userStore.user.is_apply_membership ? that.userStore.user.is_apply_membership : 0
    }
  }
}
</script>

<style lang="less" scoped>
.pt15{
  padding-top: 15px;
}
.lh35{
  line-height: 35px;
}
.user-base-data{
  padding: 15px 15px 0 0;
  .user-photo{
    border-radius: 0;
    // width: 80%;
    // height: -webkit-calc(width);
    // height: calc(width);
  }
}
  // .bg {
  //   padding-top: 15px;
  //   padding-bottom: 10px;
  // }
  .user-header {
    padding: 5px 0 20px 15px;
    position: relative;
    border-bottom: 1px solid #d8d8d8;
    h3 {
      margin: 0;
      font-size: 22px;
      line-height: 1;
      font-weight: 400;
      color: #4f4f4f;
    }
    span {
      position: absolute;
      width: 82px;
      font-size: 14px;
      line-height: 34px;
      text-align: center;
      color: #fff;
      background: #ed6d00;
      right: 10px;
      bottom: 15px;
    }
  }
  .user-main {
    padding-left: 15px;
    padding-top: 15px;
    img {
      float: left;
      width: 161px;
      height: 169px;
      margin-right: 42px;
    }
    .user-main-left {
      float: left;
      margin-top: -10px;
      font-size: 14px;
      line-height: 36px;
      color: #474747;
    }
  }
  .user-foot {
    h4 {
      margin: 56px 0 36px;
      font-size: 18px;
      line-height: 1;
      color: #363636;
      text-align: center;
      font-weight: 400;
    }
    .user-foot-main {
      font-size: 0;
    }
  }
  .medal-item {
    display: inline-block;
    width: 20%;
    margin-bottom: 20px;
    text-align: center;
    img {
      display: inline-block;
      width: 106px;
      height: 106px;
      border-radius: 50%;
    }
    p {
      margin: 0;
      margin-top: 22px;
      font-size: 14px;
      line-height: 1;
      color: #656565;
    }
  }
</style>
