class Dictionary {
 constructor() {
  this.entries = {}
 }

 newEntry(key, value) {
  this.entries[key] = value
 }

 look(key) {
  if (key in this.entries != true) {
   return "Can't find entry for " + key
  }
  return this.entries[key]
 }
}