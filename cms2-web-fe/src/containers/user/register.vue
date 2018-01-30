<template>
<div class="container register bg">
  <form class="form-horizontal">
    <div class="form-group">
      <label for="userName" class="col-sm-2 control-label">姓名</label>
      <div class="col-sm-4">
        <input type="text" @input="verifyFormuserName" class="form-control" v-model="userName" id="userName" placeholder="请输入姓名">
      </div>
      <div class="col-sm-4"><span class="error">{{dataError['userName']}}</span></div>
    </div>
    <div class="form-group">
      <label for="userEmail" class="col-sm-2 control-label">邮箱</label>
      <div class="col-sm-4">
        <input type="text" class="form-control" @input="verifyFormuserEmail" v-model="userEmail" id="userEmail" placeholder="请输入邮箱">
      </div>
      <div class="col-sm-4"><span class="error">{{dataError['userEmail']}}</span></div>
    </div>
    <div class="form-group">
      <label for="userCard" class="col-sm-2 control-label">身份证</label>
      <div class="col-sm-4">
        <input type="text" @input="verifyFormuserCard" class="form-control" v-model="userCard" id="userCard" placeholder="请输入身份证">
      </div>
      <div class="col-sm-4"><span class="error">{{dataError['userCard']}}</span></div>
    </div>
    <div class="form-group">
      <label for="userPwd"  class="col-sm-2 control-label">密码</label>
      <div class="col-sm-4">
        <input type="password" @input="verifyFormuserPwd" maxlength=20 class="form-control" v-model="userPwd" id="userPwd" placeholder="请输入密码">
      </div>
      <div class="col-sm-4"><span class="error">{{dataError['userPwd']}}</span></div>
    </div>
    <div class="form-group">
      <label for="userPwds" class="col-sm-2 control-label">确认密码</label>
      <div class="col-sm-4">
        <input type="password" @input="verifyFormuserPwds" maxlength=20 class="form-control" v-model="userPwds" id="userPwds" placeholder="请输入确认密码">
      </div>
      <div class="col-sm-4"><span class="error">{{dataError['userPwds']}}</span></div>
    </div>
    <div class="form-group">
      <label for="address" class="col-sm-2 control-label">是否申请特跑会员</label>
      <div class="col-sm-4">
        <div class="radio">
          <label>
            <input v-model="declare" value="1" type="radio"> 是
          </label>
          <label>
            <input v-model="declare" value="0" type="radio"> 否
          </label>
        </div>

      </div>
      <!-- <div class="col-sm-4"><span class="error">{{dataError['address'] ? dataError['address'][0] : ''}}</span></div> -->
    </div>
    <div class="form-group">
      <label for="address" class="col-sm-2 control-label">验证码</label>
      <div class="col-sm-4">
        <input type="text" @input="verifyFormcaptcha" class="form-control captcha" v-model="captcha" id="captcha" placeholder="请输入验证码">
        <img v-bind:src="imgSrc" v-on:click="clickCaptcha" style="width:100px;" ref="captcha" class="captcha" alt="验证码">
      </div>
      <div class="col-sm-4"><span class="error">{{dataError['captcha']}}</span></div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-4">
        <div class="checkbox">
          <label>
            <input v-model="userCheckbox" id="userCheckbox" type="checkbox"> 同意并接受

          </label>
          《<a href="javascript:void(0)" class="alink" v-on:click="messageshengming=true">迅驰体育跑者服务系统用户协议</a>》
        </div>
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-offset-2 col-sm-4">
        <button type="button" v-on:click="submitForm" class="btn btn-warning">注 册</button>
        我已有账号  <a href="javascript:void(0)" class="alink" v-on:click="showLogin">登陆</a>

        <span class="error">{{messageerror}}</span>
      </div>
    </div>
  </form>
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
    </Modal>
    <!-- <userlogin v-bind:isshow="usershow" v-on:listenToChildEvent="cancel"  /> -->
</div>
</template>
<script>
import config from '@/api/config'
// import $ from 'jquery'
import { mapGetters, mapActions } from 'vuex'
import { GET_CAREER, GET_PROVINCE, GET_CITY } from '@/store/modules/dicStore'
import { USER_REG } from '@/store/modules/userStore'
// import userlogin from '@/components/userlogin'
export default {
  data () {
    return {
      vuerify: 0,
      userName: '',
      userEmail: '',
      userPwd: '',
      userPwds: '',
      userCard: '',
      declare: 1,
      userCheckbox: true,
      captcha: '',
      messageshengming: false,
      messageerror: '',
      // usershow: false,
      dataError: {
        userName: '',
        userEmail: '',
        userPwd: '',
        userPwds: '',
        userCard: '',
        captcha: ''
      }
    }
  },
  components: {
    // userlogin
  },
  computed: {
    ...mapGetters({
      dicStore: 'dicStore',
      userStore: 'userStore'
    }),
    imgSrc () {
      return config.user.captcha
    },
    dataCityList () {
      let that = this
      let dataList = []
      for (let province in that.dicStore.city) {
        let item = that.dicStore.city[province]
        if (Number(item.province_id) === Number(that.province)) {
          dataList = item.citys
        }
      }
      // console.log(dataList)
      return dataList
    },
    verifyForm () {
      // if (this.vuerify === 0) {
      //   this.vuerify = 10
      //   return false
      // }
      let that = this
      let flag = true
      if (this.isTrim(that.userName)) {
        that.dataError['userName'] = '姓名不能为空'
        flag = false
      } else if (this.isLength(that.userName, 2)) {
        that.dataError['userName'] = '用户名不能小于2个字符'
        flag = false
      } else {
        that.dataError['userName'] = ''
      }
      if (this.isTrim(that.userEmail)) {
        that.dataError['userEmail'] = '邮箱不能为空'
        flag = false
      } else if (!this.isEmail(that.userEmail)) {
        that.dataError['userEmail'] = '邮箱格式不正确'
        flag = false
      } else {
        that.dataError['userEmail'] = ''
      }
      if (this.isTrim(that.userPwd)) {
        that.dataError['userPwd'] = '密码不能为空'
        flag = false
      } else if (this.isLength(that.userPwd, 6)) {
        that.dataError['userPwd'] = '6-20位密码限制'
        flag = false
      } else {
        that.dataError['userPwd'] = ''
      }
      if (this.isTrim(that.userPwds)) {
        that.dataError['userPwds'] = '确认密码不能为空'
        flag = false
      } else if (!this.isEqual(that.userPwd, that.userPwds)) {
        that.dataError['userPwds'] = '两次密码不一致'
        flag = false
      } else {
        that.dataError['userPwds'] = ''
      }
      if (this.isTrim(that.userCard)) {
        that.dataError['userCard'] = '身份证不能为空'
        flag = false
      } else if (!this.isCard(that.userCard)) {
        that.dataError['userCard'] = '身份证填写不正确'
        flag = false
      } else {
        that.dataError['userCard'] = ''
      }
      if (this.isTrim(that.captcha)) {
        that.dataError['captcha'] = '请输入验证码'
        flag = false
      } else {
        that.dataError['captcha'] = ''
      }
      console.log(that.dataError)
      return !flag
    }
    // dataError () {
    //   // console.log(this.$vuerify.$dataError)
    //   return this.vuerify === 0 ? [] : this.$vuerify.$dataError
    // }
  },
  created () {
    // this.GET_CAREER({})
    // this.GET_PROVINCE({})
    // this.GET_CITY({})
  },
  methods: {
    ...mapActions([GET_CAREER, GET_PROVINCE, GET_CITY, USER_REG]),
    clickCaptcha () {
      this.$refs.captcha.src = this.imgSrc + '&g=' + Math.random()
    },
    showLogin () {
      // this.usershow = true
      this.$root.$emit('userOpen', {})
    },
    // cancel (data) {
    //   this.usershow = false
    // },
    submitForm () {
      // console.log($.cookie())
      // console.log('submitForm')
      let that = this
      if (that.verifyForm) {
        return
      }
      that.messageerror = ''
      // if (this.$vuerify.check()) {
      let data = {}
      data['username'] = that.userName
      data['email'] = that.userEmail
      data['password'] = that.userPwd
      data['qpassword'] = that.userPwds
      data['card'] = that.userCard
      data['captcha'] = that.captcha
      data['declare'] = that.declare
      // $('a')
      // data['X-XSRF-TOKEN'] = $.cookie('XSRF-TOKEN')

      that.USER_REG({
        data: data,
        callback: (err, data) => {
          if (err === undefined) {
            that.$router.replace({ path: '/user' })
            // 注册成功，登录
          } else {
            that.messageerror = err
            // 注册失败
          }
        }
      })
      console.log(JSON.stringify(data))
      // }
    },
    verifyFormuserName () {
      let that = this
      let flag = true
      if (this.isTrim(that.userName)) {
        that.dataError['userName'] = '姓名不能为空'
        flag = false
      } else if (this.isLength(that.userName, 2)) {
        that.dataError['userName'] = '用户名不能小于2个字符'
        flag = false
      } else {
        that.dataError['userName'] = ''
      }
      return !flag
    },
    verifyFormuserEmail () {
      let that = this
      let flag = true
      if (this.isTrim(that.userEmail)) {
        that.dataError['userEmail'] = '邮箱不能为空'
        flag = false
      } else if (!this.isEmail(that.userEmail)) {
        that.dataError['userEmail'] = '邮箱格式不正确'
        flag = false
      } else {
        that.dataError['userEmail'] = ''
      }
      return !flag
    },
    verifyFormuserCard () {
      let that = this
      let flag = true
      if (this.isTrim(that.userCard)) {
        that.dataError['userCard'] = '身份证不能为空'
        flag = false
      } else if (!this.isCard(that.userCard)) {
        that.dataError['userCard'] = '身份证填写不正确'
        flag = false
      } else {
        that.dataError['userCard'] = ''
      }
      return !flag
    },
    verifyFormuserPwd () {
      let that = this
      let flag = true
      if (this.isTrim(that.userPwd)) {
        that.dataError['userPwd'] = '密码不能为空'
        flag = false
      } else if (this.isLength(that.userPwd, 6)) {
        that.dataError['userPwd'] = '6-20位密码限制'
        flag = false
      } else {
        that.dataError['userPwd'] = ''
      }
      return !flag
    },
    verifyFormuserPwds () {
      let that = this
      let flag = true
      if (this.isTrim(that.userPwds)) {
        that.dataError['userPwds'] = '确认密码不能为空'
        flag = false
      } else if (!this.isEqual(that.userPwd, that.userPwds)) {
        that.dataError['userPwds'] = '两次密码不一致'
        flag = false
      } else {
        that.dataError['userPwds'] = ''
      }
      return !flag
    },
    verifyFormcaptcha () {
      let that = this
      let flag = true
      if (this.isTrim(that.captcha)) {
        that.dataError['captcha'] = '请输入验证码'
        flag = false
      } else {
        that.dataError['captcha'] = ''
      }
      return !flag
    }
  },
  watch: {
    province (newVal, oldVal) {
      if (newVal === oldVal) return
      let that = this
      that.city = ''
      let dataList = []
      for (let province in that.dicStore.city) {
        let item = that.dicStore.city[province]
        if (Number(item.province_id) === Number(newVal)) {
          dataList = item.citys
        }
      }
      this.$nextTick(function () {
        this.cityData = Object.assign([], dataList)
      })
    }
  }
}
</script>
<style>

</style>
