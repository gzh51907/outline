<template>
  <div>
    <h1>免费注册</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="regForm"
      status-icon
      label-width="100px"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    const validatePass = (rule, value, callback) => {
        console.log('validatePass',rule, value, callback)
    //   if (value === "") {
    //     callback(new Error("请再次输入密码"));
    //   } else 
      
      if (value !== this.ruleForm.password) {
        //   校验失败
        callback(new Error("两次输入密码不一致!"));
      } else {
        //   通过校验
        callback();
      }
    };
    return {
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      rules: {
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度必须为 6 到 12 个字符",
            trigger: "blur"
          }
        ],
        checkPass: [
            { required: true, message: "请确认密码", trigger: "blur" },
            { validator: validatePass, trigger: "blur" }
            ],
        username: [
          { required: true, message: "亲，用户名必须填写哟", trigger: "blur" }
        ]
      }
    };
  },
  methods:{
      submitForm() {
        //   校验整个表单
        this.$refs.regForm.validate((valid) => {
            // valid： 所有校验规则都通过后，得到true，只要有一个表单元素校验不通过则得到form
          if (valid) {
            // alert('submit!');
            // 发起ajax请求，等待服务器返回结果
            // 根据服务器返回结果：注册成功->跳到“我的”

            // this.$router.replace('/mine')
            let {username} = this.ruleForm
            this.$router.replace({name:'mine',params:{username},query:{username}})
            // this.$router.replace({path:'/mine',params:{username}})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>