 class Person extends Thread {

     @Override
         public void run() {
             for(int i = 100; i >= 90; i--) {
                 System.out.println(i);
             }
     }



}
