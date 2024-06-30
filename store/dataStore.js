import { defineStore } from 'pinia';

export const useDataStore = defineStore('data', {
    state: () => ({
        filteredData: [], // Data source
        
    }),
    actions: {
       

          async setData(data){
            try{
                this.filteredData = data
                console.log("in store")
            }
            catch{
                console.log('Error setting popup type', error);
            }

          },
       

       
        
    },
   
});