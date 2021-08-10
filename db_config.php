<?php
   require __DIR__.'/vendor/autoload.php';

   use Kreait\Firebase\Factory;
   use Kreait\Firebase\ServiceAccount;

   // This assumes that you have placed the Firebase credentials in the same directory
   // as this PHP file.
   $serviceAccount = ServiceAccount::fromJsonFile(__DIR__ . '/roboworldweb-firebase-adminsdk-er3cu-6911c02cd6');
   $firebase = (new Factory)
      ->withServiceAccount($serviceAccount)
      ->withDatabaseUri('https://roboworldweb.firebaseio.com/')
      ->create();
      
   $database = $firebase->getDatabase();
?>

