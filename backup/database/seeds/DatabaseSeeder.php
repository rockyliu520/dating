<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;
use Faker\Factory as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        
        $state = ['Australian Capital Territory', 'New South Wales', 'Northern Territory', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia'];

        $faker = Faker::create();

        // 创建faker 访问者
        $data1 = mktime(0,0,0,5,1,2017);
        $data2 = mktime(0,0,0,7,18,2017);
        for ($i = 0; $i < 600; $i++) {
            $rand_time = mt_rand($data1, $data2);
            $d = date('Y-m-d H:i:s',$rand_time);

            DB::table('visitor')->insert([
                'visitorId' => mt_rand(150, 229),
                'userId' => 1,
                'created_at' => $d,
                'updated_at' => $d
            ]);
        }

        // 创建fake user
        // for ($i = 0; $i < 80; $i++) {
        //     $url = '/img/users/'.mt_rand(1, 24).'.jpg';

        // 	if ($i%2 == 0) {
        // 		DB::table('users')->insert([
		      //       'fname' => $faker->name,
		      //       'email' => $faker->email,
		      //       'password' => bcrypt('secret'),
		      //       'year' => $faker->year,
		      //       'date' => rand(1, 30),
		      //       'month' => rand(1, 12),
		      //       'sex' => 'female',
		      //       'location' => $state[mt_rand(0,7)],
        //             'image' => $url
		      //   ]);
        // 	} else {
        // 		DB::table('users')->insert([
		      //       'fname' => $faker->name,
		      //       'email' => $faker->email,
		      //       'password' => bcrypt('secret'),
		      //       'year' => $faker->year,
		      //       'date' => rand(1, 30),
		      //       'month' => rand(1, 12),
		      //       'sex' => 'male',
		      //       'location' => $state[mt_rand(0,7)],
        //             'image' => $url
		      //   ]);
        // 	}
        // }
    }
}
