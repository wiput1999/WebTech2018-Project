# Input and Output
Input และ Output เป็นเรื่องสำคัญต่อการทำโปรแกรม เพราะหากว่าเราไม่มี เราจะไม่รู้ ว่าโปรแกรมมันทำงานได้ถูกต้องแล้วหรือไม่ ดังนั้นทุกโปรแกรมจึงควรมีทั้ง Input และ Output เสมอ

แต่ก่อนที่จะให้เราไปดูเรื่อง Input และ Output ก็ต้องสอนการประกาศตัวแปรกันก่อน

## อะไรคือตัวแปร
ตัวแปร (Variable) นั่นก็คือค่าที่สามารถเปลี่ยนแปลงได้ตลอดเวลา และสามารถเรียกดู​ และเอาไปทำอะไรที่น้องอยากทำได้หมดเลย จะเก็บตู้เย็นก็ยังได้ครับ (ถ้าเอาตู้เย็นเข้า Python ได้อ่ะนะ)

เราจำเป็นที่จะต้องประกาศตัวแปร เพื่อจะไปรับค่าที่น้องกำลังเอาเข้ามา หรือว่าผลลัพท์จากการทำอะไรซักอย่าง หรืออยากเก็บข้อมูลอะไรไว้ตั้งแต่แรก

การประกาศก็เพียงเขียนชื่อตัวแปร และก็ตามด้วยเครื่องหมายเท่ากับ (=) ครับ

ตัวอย่างเช่น
```python
first_name = "Kumamon"
is_bear = True
age = 21
address = ['Kumamoto Square', 'IT KMITL']
age_until_50 = 50 - age
```
สำหรับคนที่เคยเขียนโปรแกรมภาษาอืื่น ก็จะเรื่มสงสัยว่า เราไม่ต้องไปบอกว่าให้เก็บประเภทข้อมูล (Data Type) อะไรเลยเหรอ ซึ่งใน Python นั้นไม่ต้องครับ

สามารถเข้าไปเรียนการแจกตัวแปร[ที่นี่](Python/Introduction/Variable/)ครับ

## การรับ Input
Input หมายถึงสิ่งที่ได้รับเข้ามา ในที่นี้คือโปรแกรมนั้นจะรับค่าอะไรมาเพื่อที่จะให้นำไปใช้ในโปรแกรมของจริง<br>
โดยในภาษา Python นั้นจะใช้ฟังก์ชัน `input()` เพื่อทำการรับ input เข้ามาสู่ระบบ

 การใช้ `input()` นั้น จะเป็นการรับข้อมูลประเภท string ทั้งหมด เพื่อป้องกันการเก็บข้อมูลผิดประเภทนั่นเอง<br>
ถ้าหากต้องการเปลี่ยนประเภทของ input เป็นอย่างต่างๆ (เช่น float, boolean, integer) <br>
ก็จำเป็นที่จะต้องทำการ data type casting โดยจะสอนวิธีการเปลี่ยนประเภทตัวแปรในขั้นตอนต่อ ๆ ไป

ตัวอย่างการรับ input ในภาษา Python
```python
input()
```

แต่เมื่อรับมาแล้ว ก็ควรจะมีตัวแปรมารองรับ<br>
ดังนั้นจึงต้องมีตัวแปร (variable) เพื่อมาจัดเก็บข้อมูลนั้น

หากบอกว่าตัวแปรนั้นคือกล่อง กล่องนั้นสามารถเก็บอะไรก็ได้ 1 อย่าง การบอก `=` จึงหมายความว่าให้เก็บข้อมูลที่ได้จากฝั่งขวา มาใส่ตัวแปรในฝั่งซ้าย

ตัวอย่างเช่น
```python
kumamon = input()
```

โดยในโค้ดด้านบนนั้น ตัวแปร `kumamon` ก็จะมีค่าที่ได้รับมาจากฟังก์ชั่น `input()` อยู่

การรับ input นั้น จะรับค่าตั้งแต่ตัวอักษรแรก จนสุดบรรทัด
นั่นหมายความว่า หากมีการให้ input มาหลายบรรทัด เช่น
```
My
name
is
Kumamon
```
ก็จะรับ input มาเพียงบรรทัดแรกเท่านั้น (นั่นก็คือ "My" เท่านั้น)

## การส่ง Output
Output นั้นหมายถึงการเอาอะไรออกไป<br>
โดยปกติแล้ว การส่ง output นั้น ก็จะมี 2 ประเภทหลักๆ นั่นคือ
1. แสดง output ออกบนหน้าจอ
2. โยน output ไปยังฟังก์ชันอื่น (เป็นการคืนผลลัพธ์ (return) หรือเพื่อไปเป็น input ของอีกฟังก์ชันนึง)

ใน lecture นี้ พี่มงจะสอนเพียงการแสดง output ออกบนหน้าจอเท่านั้น หากว่าต้องการศึกษา output ประเภทโยนให้ฟังก์ชันอื่น ๆ สามารถเข้าไปดูได้ที่ lecture ถัดไป (เรื่อง Functions)

### วิธีการแสดง output
สามารถใช้ฟังก์ชัน `print()` เพื่อให้แสดงผลลัพท์บนหน้าจอผลลัพท์

ตัวอย่างการใช้ `print()`
```python
print("Hello, my name is John")
```

หากเอาโปรแกรมไปรันแล้ว น้องๆก็จะเห็น string ที่เขียนว่า "Hello, my name is John" บนหน้าจอ shell ของ Python

การแสดง output นั้น ไม่จำเป็นที่จะต้องเป็น string (แบบตัวอย่างด้านบน) เสมอไป<br>
เราสามารถให้โปรแกรมแสดงค่าข้อมูลที่อยู่ภายในตัวแปรก็ได้

ตัวอย่างเช่น
```python
player1 = "Kara"
print(player1)
```

ในโค้ดด้านบนนั้น บ่งบอกถึงการเก็บ string ที่เขียนว่า "Kara" ลงบนตัวแปร `player1` และก็ได้ทำการ `print()` ตัวแปรนั้นออกมาเพื่อแสดงบนหน้าจอ

## เช็คค่าที่อยู่บนตัวแปร
เราสามารถทำการ Check ตัวแปลได้ง่ายมาก โดยการ `print()` ตัวแปลนั้นออกมานั้นเอง
ตัวอย่างเช่น
```python
var1 = "Hello"
var2 = "World"

# จะแสดงค่าในตัวแปรออกมา ก็สามารถใช้ print() ให้แสดงค่าออกมาได้
print(var1)
print(var2)
```
output
```
Hello
World
```

## Data Type
Data Type หมายความว่า ประเภทของข้อมูลที่จัดเก็บ ซึ่ง Python นั้นก็จะทำการจัดเก็บให้เอง แต่เราก็จำเป็นที่จะต้องรู้ประเภทของมัน เพื่อที่จะทำให้เราสามารถใช้งานตัวแปรได้อย่างถูกต้องนั่นเอง

ประเภทของข้อมูลนั้นมีหลัก ๆ อยู่ 4 ประเภท ประกอบไปด้วย

| Data Type | ประเภทข้อมูลที่จัดเก็บ | ตัวอย่างข้อมูลที่จัดเก็บได้ |
|:---------:|:----------------:|:------------------:|
| String | ตัวอักษร | "Hello, World" "1234" |
| Boolean | ค่าจริงหรือเท็จ | True False |
| Float | จำนวนจริง | 1.00 1.112 -0.999 |
| Integer | จำนวนเต็ม | 1 0 -555 |

และยังมีประเภทอื่นๆ อีกมากมาย<br>
ถ้าอยากรู้เพื่ม สามารถไปศึกษาเพิ่มเติมได้ครับ
[https://docs.python.org/3.7/library/datatypes.html](https://docs.python.org/3.7/library/datatypes.html)

### Check ประเภทของตัวแปร
บางครั้งเราอาจจะลืมว่าตัวแปรตอนนี้เก็บข้อมูลประเภทอะไร เราก็สามารถเช็คได้โดยการใช้ฟังก์ชัน `type()`

ตัวอย่างเช่น
```python
var = "Hello"
type(var) # ตัว Python ก็จะบอกว่ามันคือ <class 'str'> (เป็นประเภท String)

var = "1234"
type(var) # ตัว Python ก็จะบอกว่ามันคือ <class 'str'> (เป็นประเภท String)

var = 1234
type(var) # ตัว Python ก็จะบอกว่ามันคือ <class 'int'> (เป็นประเภท Integer)

var = 1234.56
type(var) # ตัว Python ก็จะบอกว่ามันคือ <class 'float'> (เป็นประเภท Float)

var = True
type(var) # ตัว Python ก็จะบอกว่ามันคือ <class 'bool'> (เป็นประเภท Boolean)
```

ในการทดลองที่ 2 และ 3 จะเห็นได้ว่า "1234" และ 1234 นั้นมีประเภทข้อมูลไม่เหมือนกัน จะสังเกตได้ว่าข้อมูลตัวแรกได้ใส่ "" เข้าไปด้วย แสดงถึงว่ามันเป็นตัวอักษรทั่ว ๆ ไป ไม่ใช่ตัวเลขที่สามารถเอาไปคำนวณได้

## Data Type Casting
จากในเรื่องเกี่ยวกับการรับ input มานั้น 

"input() จะรับมาเป็นประเภท string ทั้งหมด"

เนื่องจากว่าหากว่าจะเป็นประเภทอื่น ที่ไม่ใช่ string ตัว Data Type ที่เป็น string ก็เก็บได้หมด

เช่น
```python
var = input() # ใส่ค่า "Hello World" เข้ามาเป็น input
print(var) # ผลลัพธ์กี่จะออกมาเป็น "Hello World"

var = input() # ใส่ค่า 1112 เข้ามาเป็น input
print(var) # ผลลัพธ์ที่ก็จะออกมาเป็น "1112"

var = input() # ใส่ค่า True เข้ามาเป็น input
print(var) # ผลลัพธ์ที่ก็จะออกมาเป็น "True"

var = input() # ใส่ค่า 11.12 เข้ามาเป็น input
print(var) # ผลลัพธ์ที่ก็จะออกมาเป็น "11.12"
```

แล้วถ้าเราอยากใช้ integer เพื่อเอาค่ามาทำการคูณกัน
```python
var1 = input()
var2 = input()
var3 = var1 * var2
print(var3)
```

เราจะเห็นว่าจะมี error
```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can't multiply sequence by non-int of type 'str'
```
เราจะเจอ `TypeError` ว่า `can't multiply sequence by non-int of type 'str'`
นั้นหมายถึงว่าเราไม่สามารถนำเอา String มาคูณกับ String ได้ เพราะค่าที่เราเก็บอยู่ใน Variable นั้นเป็น String เนื่องมาจาก input() จะเก็บค่าเป็น String ทั้งหมด

### วิธีการแปลง
ภายใน python นั้นก็จะมีการแปลงเป็น data type อื่นๆ ดังนี้

| Data Type | วิธีการแปลง	|
|:---------:|:---------:|
| String | str() |
| Boolean | bool() |
| Float | float() |
| Integer | int()	|

โดย Python จะพยายามเก็บข้อมูลและแปลงประเภทข้อมูลให้อัตโนมัติ หากมีความจำเป็น

ตัวอย่างเช่น (การแปลง string ไปเป็น integer)
```python
var = "1112"
var = int(var)
print(var) # ก็จะได้ผลลัพท์เป็น 1112 ที่เป็น Integer 
```

ตัวอย่างที่ 2 (การเปลี่ยน float ไปเป็น integer)
```python
var = 11.12
var = int(var)
print(var) # ก็จะได้ผลลัพท์เป็น 11
```

และการใช้กับ `input()` ก็สามารถทำแบบนี้ได้เลย
```python
var1 = int(input())
var2 = bool(input())
var3 = float(input())
```

และเนื่องจากมี data type มีมากกว่า 4 ประเภท การแปลงประเภทข้อมูลชนิดอื่น ๆ จะอยู่ใน lecture ถัด ๆ ไป
