from django.db import models


# Create your models here.

class Category(models.Model):
    category_title = models.CharField(max_length=150, null=False, blank=False)
    category_description = models.CharField(max_length=2500, blank=True, default="")
    parent = models.ForeignKey("self", on_delete=models.PROTECT, blank=True, null=True)
    show_in_navbar = models.BooleanField(default=True)

    def __str__(self):
        if self.parent:
            return Category.get_sub(self)
        else:
            return f"{self.category_title}"

    temp_list = list()

    @staticmethod
    def get_sub(obj):

        while obj:
            Category.temp_list.append(obj.category_title)
            obj = obj.parent
        string_to_return = str()
        Category.temp_list.reverse()
        counter = 0
        for sec in Category.temp_list:
            if counter == 0:
                string_to_return += f"{sec}"
            else:
                string_to_return += f" --> {sec}"
            counter += 1
        Category.temp_list = list()
        return string_to_return
