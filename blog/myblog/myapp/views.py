from django.shortcuts import get_object_or_404, render
from .models import Post

# Create your views here.
def home(request):
    posts = Post.objects.all()
    return render(request, 'myapp/index.html', {'posts': posts})

def about(request):
    return render(request, 'myapp/about_me.html')

def contact(request):
    return render(request, 'myapp/form.html')

def chatbot(request):
    return render(request, 'myapp/chatbot.html')

def form(request):
    return render(request, 'myapp/form.html')

def gallery(request):
    return render(request, 'myapp/gallery.html')


def post_detail(request, post_id):
    post = get_object_or_404(Post, pk=post_id)
    return render(request, 'myapp/post_detail.html', {'post': post})

