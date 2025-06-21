// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// // 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// // 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// // 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// // 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// // 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// // 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// // 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
//
// // abstract      arguments     await*              boolean
// // break         byte          case              catch
// // char              class*          const             continue
// // debugger          default         delete              do
// // double          else          enum*             eval
// // export*         extends*      false             final
// // finally         float         for                 function
// // goto              if              implements          import*
// // in              instanceof      int                 interface
// // let*              long          native              new
// // null              package         private             protected
// // public          return          short             static
// // super*          switch          synchronized      this
// // throw         throws          transient         true
// // try             typeof          var                 void
// // volatile          while         with              yield
//
// // var      -> variable (global)
// // const    -> constant (local)
// // let      -> let      (local)

// global

// if (true) {
//   // local global
//   if (true) {
//     //local global
//     const a = 5;
//     if (true) {
//       // local
//       console.log(a);
//     }
//   }
// }

// if - eger
// else -deyilse
// if else - deyilse eger

// if (10 < 20) {
//   console.log('this is true');
//   if (true) {
//     console.log('this is true2');
//   }
// } else if (1 < 2) {
//   console.log('this is other true');
// } else {
//   console.log('this is wrong');
// }

// let info = 5;
// switch (info) {
//   case 5:
//     info=2
//     if (info<3) {
//       console.log('little')
//     }
//     console.log('this is 5');
//     break;
//   case 10:
//     console.log('this is 10');
//     break;
//
//   default:
//     console.log('this is default');
//     break;
// }

// try {
//   throw 'everything is ok';
//   console.loag('hello');
// } catch (err) {
//   console.log(err);
// } finally {
//   console.log('im running everytime');
// }
