/* ********************************************
      USER SCHEMA
   ******************************************** */
var userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    createdOn: { type: Date, default: Date.now },
    modifiedOn: Date,
    lastLogin: Date
});
// Build User model
mongoose.model('User', userSchema);

/* ********************************************
      USER SCHEMA
   ******************************************** */
var projectSchema = new mongoose.Schema({
    projectName: String,
    createdOn: Date,
    modifiedOn: { type: Date, default: Date.now },
    createdBy: String,
    tasks: String
});
//Build Project model
mongoose.model('Project', projectSchema);

