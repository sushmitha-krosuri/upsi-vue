<template>
  <div>
    <h3>Create Post</h3>
    <form @submit.prevent="onCreatePost">
      <div class="form-group">
        <label>FirstName</label>
        <input
          type="text"
         
          v-model="postData.firstName"
          @blur="validateField('firstName')"
        />
        <span v-if="errors.firstName" class="text-danger">{{ errors.firstName }}</span>
      </div>
      <div class="form-group">
        <label>MiddleName</label>
        <input
          type="text"
          
           
        />
         
      </div>
      <div class="form-group">
        <label>LastName</label>
        <input
          type="text"
          
          v-model="postData.lastName"
          @blur="validateField('lastName')"
        />
        <span v-if="errors.lastName" class="text-danger">{{ errors.lastName }}</span>
      </div>
      <div class="form-group">
        <label>gender</label>
        
        <select v-model="postData.gender" id="gender"   @blur="validateField('gender')">
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
       </select>

        <span v-if="errors.gender" class="text-danger">{{ errors.gender }}</span>
      </div>
      <div class="form-group">
        <label>Email</label>
        <input
          type="email"
           
          v-model="postData.email"
          @blur="validateField('email')"
        />
        <span v-if="errors.email" class="text-danger">{{ errors.email }}</span>
      </div>
      <div class="form-group">
        <label>Date of Birth</label>
        <input
          type="date"
           
          v-model="postData.dob"
          @blur="validateField('dob')"
        />
        <span v-if="errors.dob" class="text-danger">{{ errors.dob }}</span>
      </div>
      <div class="form-group">
        <label>MobileNumber</label>
        <input
          type="text"
           
          v-model="postData.mobileNumber"
          @blur="validateField('mobileNumber')"
        />
        <span v-if="errors.mobileNumber" class="text-danger">{{ errors.mobileNumber }}</span>
      </div>
      <div class="form-group">
        <label>Aadhar</label>
        <input
          type="text"
           
          v-model="postData.aadhar"
          @blur="validateField('aadhar')"
        />
        <span v-if="errors.aadhar" class="text-danger">{{ errors.aadhar }}</span>
      </div>
      <div class="form-group">
        <label>Pan</label>
        <textarea
         
          v-model="postData.pan"
          @blur="validateField('pan')"
        ></textarea>
        <span v-if="errors.pan" class="text-danger">{{ errors.pan }}</span>
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Create Post</button>
      </div>
    </form>
  </div>
</template>

<script>
//import Axios from 'axios';

export default {
  data() {
    return {
      postData: {
        
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        email:'',
        dob:'',
        mobileNumber: '',
        aadhar: '',
        pan: '',
        
      },
      errors: {
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        email:'',
        mobileNumber: '',
        dob:'',
        aadhar: '',
        pan: '',
         
      },
    };
  },

  methods: {
    onCreatePost() {
      // Reset errors
      this.errors.firstName = '';
      this.errors.lastName = '';
      this.errors.gender = '';
      this.errors.mobileNumber = '';
      this.errors.aadhar = '';
      this.errors.pan = '';
      this.errors.dob=''

      // Perform validations
      if (!this.postData.firstName) {
        this.errors.firstName = 'firstName is required.';
      }

      if (!this.postData.lastName) {
        this.errors.lastName = 'lastName is required.';
      }

      if (!this.postData.gender) {
        this.errors.gender = 'gender is required.';
      }
      if (!this.postData.email) {
        this.errors.email = 'email is required.';
      }
       
      if (!this.postData.dob) {
        this.errors.dob = 'dob is required.';
      }

      if (!this.postData.mobileNumber) {
        this.errors.mobileNumber = 'mobileNumber is required.';
      }

      if (!this.postData.aadhar) {
        this.errors.aadhar = 'aadhar is required.';
      }
      if (!this.postData.pan) {
        this.errors.pan = 'pan is required.';
      }

      // Check if there are any errors
      if (this.errors.firstName || this.errors.lastName||this.errors.dob|| this.errors.mobileNumber|| this.errors.aadhar || this.errors.pan || this.errors.email) {
        return; // Don't submit the form if there are errors
      }

      // Axios.post('https://vue-completecourse.firebaseio.com/posts.json', this.postData)
      //   .then((response) => {
      //     console.log(response);
      //     this.$router.push('/postpage');
      //   });
    },
    emailIsValid(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    },

    validateField(field) {
      // Reset the specific field error
      this.errors[field] = '';

      // Perform field-specific validation
      if (field === 'firstName' && !this.postData.firstName) {
        this.errors.firstName = 'firstname is required.';
      }

      if (field === 'lastName' && !this.postData.lastName) {
        this.errors.lastName = 'lastname is required.';
      }
      if (field === 'gender' && !this.postData.gender) {
        this.errors.gender = 'gender is required.';
      }

      if (field === 'email' && !this.postData.email) {
        this.errors.email = 'email is required.';
      }else if  (field==='email' && !this.emailIsValid(this.postData.email)) {
            this.errors.email = 'Invalid email address.';
       }

       if (field === 'dob' && !this.postData.dob) {
        this.errors.dob = 'Date of birth is required.';
      }  
       
      if (field === 'mobileNumber' && !this.postData.mobileNumber) {
        this.errors.mobileNumber = 'mobilenumber is required.';
      }
      if (field === 'aadhar' && !this.postData.aadhar) {
        this.errors.aadhar = 'aadhar is required.';
      }
      if (field === 'pan' && !this.postData.pan) {
        this.errors.pan = 'pan is required.';
      }
    },
  },
};
</script>


<!-- <script>
export default {
  data() {
    return {
      postData: {
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        email: '',
        dob: '',
        mobileNumber: '',
        aadhar: '',
        pan: '',
      },
      errors: {
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        email: '',
        dob: '',
        mobileNumber: '',
        aadhar: '',
        pan: '',
      },
      fieldValidations: {
        firstName: { error: 'firstname is required.' },
        lastName: { error: 'lastname is required.' },
        gender: { error: 'gender is required.' },
        email: { error: 'email is required.', isValid: this.emailIsValid },
        dob: { error: 'Date of birth is required.' },
        mobileNumber: { error: 'mobilenumber is required.' },
        aadhar: { error: 'aadhar is required.' },
        pan: { error: 'pan is required.' },
      },
    };
  },

  methods: {
    validateField(){},
    onCreatePost() {
      this.resetErrors();

      // Perform validations
      Object.entries(this.fieldValidations).forEach(([field, validation]) => {
        if (!this.postData[field] || (validation.isValid && !validation.isValid(this.postData[field]))) {
          this.errors[field] = validation.error;
        }
      });

      // Check if there are any errors
      if (Object.values(this.errors).some((error) => error)) {
        return; // Don't submit the form if there are errors
      }

      // Form submission logic
    },

    emailIsValid(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },

    resetErrors() {
      for (const field in this.errors) {
        this.errors[field] = '';
      }
    },
  },
};
</script> -->










<!-- <template>
  <div class="dp-creation-cont">
    <form @submit="submitForm" class="form-container">
      <div class="form-row">
        <div class="input-container">
          <label for="firstName">First Name<span class="required-marker">*</span>:</label>
          <input
            v-model="formData.firstName"
            type="text"
            id="firstName"
            @blur="validateField('firstName')"
            @input="clearFieldValidation('firstName')"
            :class="{ 'input-field': true, 'input-invalid': fieldValidation.firstName }"
            placeholder="First Name"
            required
          />
          <div v-if="!isFieldValid('firstName')" class="error-message">
            <small>This field is Required</small>
          </div>
        </div>

        <div class="input-container">
          <label for="middleName">Middle Name:</label>
          <input
            v-model="formData.middleName"
            type="text"
            id="middleName"
            placeholder="Middle Name"
          />
        </div>

        <div class="input-container">
          <label for="lastName">Last Name<span class="required-marker">*</span>:</label>
          <input
            v-model="formData.lastName"
            type="text"
            id="lastName"
            @blur="validateField('lastName')"
            @input="clearFieldValidation('lastName')"
            :class="{ 'input-field': true, 'input-invalid': fieldValidation.lastName }"
            placeholder="Last Name"
            required
          />
          <div v-if="!isFieldValid('lastName')" class="error-message">
            <small>This field is Required</small>
          </div>
        </div>

        <div class="input-container gender-cont">
          <label for="gender">Gender<span class="required-marker">*</span>:</label>
          <select
            v-model="formData.gender"
            id="gender"
            @blur="validateField('gender')"
            @input="clearFieldValidation('gender')"
            :class="{ 'input-field': true, 'input-invalid': fieldValidation.gender }"
            required
          >
            <option value="" disabled selected>Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <div v-if="!isFieldValid('gender')" class="error-message">
            <small>This field is Required</small>
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="input-container">
          <label for="dob">Date of Birth:</label>
          <input v-model="formData.dob" type="date" id="dob" class="input-field" placeholder="Date Of Birth" />
        </div>

        <div class="input-container">
          <label for="email">Email<span class="required-marker">*</span>:</label>
          <input
            v-model="formData.email"
            type="email"
            id="email"
            @blur="validateField('email')"
            @input="clearFieldValidation('email')"
            :class="{ 'input-field': true, 'input-invalid': fieldValidation.email }"
            placeholder="Email"
            required
          />
          <div v-if="!isFieldValid('email')" class="error-message">
            <small v-if="!formData.email">Email Required</small>
            <small v-else-if="!emailIsValid(formData.email)">Invalid email</small>
          </div>
        </div>

        <div class="input-container">
          <label for="mobileNumber">Mobile Number<span class="required-marker">*</span>:</label>
          <input
            v-model="formData.mobileNumber"
            type="text"
            id="mobileNumber"
            @blur="validateField('mobileNumber')"
            @input="clearFieldValidation('mobileNumber')"
            :class="{ 'input-field': true, 'input-invalid': fieldValidation.mobileNumber }"
            placeholder="Mobile Number"
            required
          />
          <div v-if="!isFieldValid('mobileNumber')" class="error-message">
            <small>This field is Required</small>
          </div>
        </div>

        <div class="input-container">
          <label for="phoneNumber">Phone Number:</label>
          <input v-model="formData.phoneNumber" type="tel" id="phoneNumber" class="input-field" placeholder="Phone Number" />
        </div>
      </div>

      <div class="form-row">
        <div class="input-container">
          <label for="aadhar">Aadhar:</label>
          <input v-model="formData.aadhar" type="text" id="aadhar" class="input-field" placeholder="Aadhar Number" />
        </div>

        <div class="input-container">
          <label for="pan">PAN:</label>
          <input v-model="formData.pan" type="text" id="pan" class="input-field" placeholder="PAN Number" />
        </div>

        <div class="input-container">
          <label for="otherID">Other ID:</label>
          <input v-model="formData.otherID" type="text" id="otherID" class="input-field" placeholder="Other ID" />
        </div>

        <div class="input-container">
          <label for="level">Level:</label>
          <select
            v-model="formData.level"
            id="level"
            @blur="validateField('level')"
            @input="clearFieldValidation('level')"
            :class="{ 'input-field': true, 'input-invalid': fieldValidation.level }"
            required
          >
            <option value="" disabled selected>Select Level</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
          <div v-if="!isFieldValid('level')" class="error-message">
            <small>This field is Required</small>
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="input-container">
          <label for="organisation">Organisation:</label>
          <input v-model="formData.organisation" type="text" id="organisation" class="input-field" placeholder="Organisation" />
        </div>

        <div class="input-container">
          <label for="designation">Designation:</label>
          <input v-model="formData.designation" type="text" id="designation" class="input-field" placeholder="Designation" />
        </div>

        <div class="input-container">
          <label for="orgRelation">Organisation Relation:</label>
          <input
            v-model="formData.orgRelation"
            type="text"
            id="orgRelation"
            class="input-field"
            placeholder="Organisation Relation"
          />
        </div>

        <div class="input-container">
          <label for="fileUpload">File Upload:</label>
         </div>
      </div>

      <div class="form-row">
        <div class="text-area-cont">
          <label for="notes">Notes:</label>
          <textarea v-model="formData.notes" id="notes" class="textarea-field"></textarea>
        </div>
      </div>

      <div class="buttons-cont">
        <button type="submit" class="btn button-section">Save</button>
        <button type="reset" class="btn button-section" @click="resetForm">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        dob: '',
        email: '',
        mobileNumber: '',
        phoneNumber: '',
        aadhar: '',
        pan: '',
        otherID: '',
        level: '',
        organisation: '',
        designation: '',
        orgRelation: '',
        fileUpload: '',
        notes: '',
      },
      fieldValidation: {
        firstName: false,
        lastName: false,
        gender: false,
        dob: false,
        email: false,
        mobileNumber: false,
        level: false,
      },
    };
  },
  methods: {
    isFieldValid(field) {
      return !!this.formData[field];
    },
    emailIsValid(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    },
    validateField(field) {
      if (!this.formData[field]) {
        this.fieldValidation[field] = true;
      }
    },
    clearFieldValidation(field) {
      this.fieldValidation[field] = false;
    },
    submitForm() {
      if (this.isFormValid()) {
        console.log(this.formData);
        this.resetForm();
      } else {
        // Display error messages or handle invalid form data
      }
    },
    isFormValid() {
      const requiredFields = ['firstName', 'lastName', 'gender', 'email', 'mobileNumber', 'level'];
      for (const field of requiredFields) {
        if (!this.formData[field]) {
          this.fieldValidation[field] = true;
          return false;
        }
      }

      if (this.formData.email && !this.emailIsValid(this.formData.email)) {
        this.fieldValidation.email = true;
        return false;
      }

      return true;
    },
    resetForm() {
      this.formData = {
        firstName: '',
        middleName: '',
        lastName: '',
        gender: '',
        dob: '',
        email: '',
        mobileNumber: '',
        phoneNumber: '',
        aadhar: '',
        pan: '',
        otherID: '',
        level: '',
        organisation: '',
        designation: '',
        orgRelation: '',
        fileUpload: '',
        notes: '',
      };
      this.fieldValidation = {
        firstName: false,
        lastName: false,
        gender: false,
        dob: false,
        email: false,
        mobileNumber: false,
        level: false,
      };
    },
  },
};
</script>

<style>
/* Your styles here... */
.input-invalid {
  border-color: red;
}
</style> -->
