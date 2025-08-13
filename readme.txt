================= LOG IN OR SIGN UP USER ========================

agar haam user ko sign in or log in karte ha to us ka name top pa show hota ha steps below ha 
1 first user ko sign karo sign in karna ka baad user to token do jo ka localstorage ma store ho gha or wo token mongodbka _id sa bana gha (secrurity reason if reverse then he get only id nothing more )

2 phir home page jaab phali dafa load ho gha to wo headers ma token backend ko baja gha or backend jsonwebtoken.verify sa token ma sa data laa gha or print kare gha 

3 user jaab login kare gha taab haam us ka data find kare gha db ma agar mial tou us ka _id localstorage ma jsonwebtoken ma store kare ghaa phir home page token check kare gha or backend ko daa gha then verfiy kar ke data daa gha 
