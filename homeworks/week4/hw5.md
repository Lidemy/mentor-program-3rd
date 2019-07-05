�ХH�ۤv���ܸ��� API �O����H

�ڥh�Ȧ� ATM ��@���� (���)�A�z�L ATM ( API ) �A

�δ��ڥd (�Ѽ�) ���J ATM �A����������A�ڻ��F�@���� (�R�����)�C

���G�Ӯ`�Ȧ��S���H�b�ݧڪ����A�N�����F�A���G�o�{�ګ����Ʀr�Ӧh�F�A�ڮڥ��S��h����~

�u�n�ק�@�U�Ʀr���B (�ק���)�A��X�Ӥ@�ݡA�x�H�n������ڡA���G�S��Ӧh�F�A

�u�n�S�s�F�@�ǿ��i�h (�s�W���)�A�̫ᶶ�K�ݤ@�U�s�ھl�B�d�߬ݹ藍�� (�d�߸��)�A�H�K���ʨS���F~



ATM �������N�O API�F���A�N�O�ڭn����ơF�Ȧ�A�N�O�ڪ���H

�ڳz�L ATM ������ (API) �өM�Ȧ�s�� (�s�W) �B��� (�R��)�B�d�߳Ѿl���B (�d��)

���ڥd (�Ѽ�)�N�O�ڥΪ����P�ѼơA��J���P�����ڥd�A�N��d�ߤ��P�Ȧ檺���




�Ч�X�T�ӽҵ{�S�Ъ� HTTP status code ��²�椶��

201 Created
�ШD���\�B�s���귽���\�Q�ЫءA�q�`�Ω� POST �Τ@�� PUT �ШD�᪺�^���C

202 Accepted
���ШD�w�g�Q�������|���B�z�C�����A���D�ӿթʡA�N�� HTTP �L�k�b����ǰe�@�ӫD�P�B���^���i���ШD���B�z���G�C
�̪�ت����~���{�ǩΨ�L���A���B�z�ШD�����p�A�ΥΩ�妸�B�z���C


403 Forbidden
�Τ�ݨõL�X���v���A�Ҧp���Q���v�A�ҥH���A���ڵ������������^���C���P�� 401�A���A�ݪ��D�Τ�ݪ������C


���]�A�{�b�O���\�U���x�A�ݭn���� API ���O�H�걵�ô��Ѱ򥻪� CRUD �\��A
�]�A�G�^
�Ҧ��\�U��ơB�^�ǳ�@�\�U��ơB�R���\�U�B�s�W�\�U�B����\�U�A
�A�� API �|������ˤl�H�д��Ѥ@�� API ���C

Base URL: https://www.jing-restaurants.com


| ����              | Method   |path              | �Ѽ�                    | �d��                   | 
| ------------------|----------|------------------|-------------------------|------------------------|
| ����Ҧ��\�U���  | GET      | /restaurants     | _limit:����^�Ǹ�Ƽƶq | /restaurants?_limit=5  |
| �����@�\�U���  | GET      | /restaurants/:id | �L                      | /restaurants/10        |
| �s�W���y          | POST     | /restaurants     | name: �\�U�W��          | �L                     |
| �R�����y          | DELETE   | /restaurants/:id | �L                      | �L                     |
| �����y��T      | PATCH    | /restaurants/:id | name: �\�U�W��          | �L                     |


����Ҧ��\�U���
GET https://www.jing-restaurants.com/restaurant


���o�e���a�\�U���
GET https://www.jing-restaurants.com/restaurant?_limit=6

�����@�\�U��� ( ����ĤG�a�\�U )
GET https://www.jing-restaurants.com/restaurant/2


�s�W�\�U�\�U
POST https://www.jing-restaurants.com/restaurant/


�R���\�U ( �R���ĤC�a )
DELETE https://www.jing-restaurants.com/restaurant/7


�ܧ��\�U��T ( �R���ĤC�a )
PATCH https://www.jing-restaurants.com/restaurant/7


[
  {
    "id": 1,
    "name": "�h�Y�j��s�a",
    "arrd":"Taipei",
    "tel":"0911123456"	
  },
  {
    "id": 2,
    "name": "Asia 49�Ȭw�Ʋz�ΰs�Y",
    "arrd":"Kaohsiung",
    "tel":"0911987654"	
  },
  {
    "id": 3,
    "name": "��N",
    "arrd":"Yunlin",
    "tel":"0911987654"	
  },
  {
    "id": 4,
    "name": "�o�@��ӫǯ����窫",
    "arrd":"Kaohsiung",
    "tel":"0911987654"	
  },
  {
    "id": 5,
    "name": "���_",
    "arrd":" Taoyuan",
    "tel":"0911987654"	
  },
  {
    "id": 6,
    "name": "������",
    "arrd":"Tainan",
    "tel":"0911987654"	
  },
  {
    "id": 7,
    "name": "�婥�� ���N�����p�m��",
    "arrd":"Kaohsiung",
    "tel":"0911987654"	
  },
  {
    "id": 8,
    "name": "Prime One�����] ",
    "arrd":"Panchiao",
    "tel":"0911987654"	
  },
  {
    "id": 9,
    "name": "TGI Fridays �P�����\�U",
    "arrd":"Kaohsiung",
    "tel":"0911987654"	
  },
  {
    "id": 10,
    "name": "�C�����\�U",
    "arrd":"Taitung",
    "tel":"0911987654"	
  }
]

